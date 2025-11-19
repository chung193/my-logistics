import React, { useState, useRef, useEffect } from "react";
import {
    Grid,
    TextField,
    Typography,
    Box,
    Stack,
    Button,
    IconButton,
    Divider
} from "@mui/material";
import { Delete, Upload } from '@mui/icons-material';
import apiService from '@services/common';
import { useGlobalContext } from '@providers/globalProvider';
import { uploadUrl } from "@services/axios";

const DetailDrawer = ({ sliderId = null, dataImages = null }) => {
    const [images, setImages] = useState(dataImages || []);
    const [selectedImage, setSelectedImage] = useState(null);
    const [urlInput, setUrlInput] = useState('');
    const [urlUpdates, setUrlUpdates] = useState({});

    const {
        showNotification,
        showLoading,
        hideLoading,
        openModal,
        closeModal,
        openDrawer,
        closeDrawer,
        showConfirm,
        closeConfirm
    } = useGlobalContext();

    const fileInputRef = useRef();

    const loadData = () => {
        showLoading();
        apiService.get(`slider-image?slider_id=${sliderId}`)
            .then(res => {
                setImages(res.data.data);
                hideLoading();
            })
            .catch(err => {
                console.log(err);
                hideLoading();
            });
    };

    useEffect(() => {
        loadData();
    }, []);

    // Chọn ảnh nhưng chưa upload
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage({
                file,
                preview: URL.createObjectURL(file)
            });
        }
    };

    const handleAdd = () => {
        if (!selectedImage || !urlInput) {
            showNotification('Vui lòng chọn ảnh và nhập URL', 'warning');
            return;
        }

        showLoading();
        const formData = new FormData();
        formData.append('image', selectedImage.file);
        formData.append('slider_id', sliderId);
        formData.append('url', urlInput);

        apiService.postWithMedia('slider-image', formData)
            .then(res => {
                showNotification('Thêm ảnh thành công', 'success');
                setSelectedImage(null);
                setUrlInput('');
                loadData();
                hideLoading();
            })
            .catch(err => {
                console.log(err);
                showNotification('Đã có lỗi', 'error');
                hideLoading();
            });
    };

    const handleRemoveImage = (index, id) => {
        showLoading();
        apiService.delete(`slider-image/${id}`)
            .then(res => {
                showNotification('Xoá ảnh thành công', 'success');
                loadData();
                hideLoading();
            })
            .catch(err => {
                console.log(err);
                showNotification('Đã có lỗi', 'error');
                hideLoading();
            });
    };

    const handleUrlChange = (id, value) => {
        setUrlUpdates(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleUpdate = (id) => {
        const newUrl = urlUpdates[id];
        if (!newUrl) {
            showNotification('Vui lòng nhập URL', 'warning');
            return;
        }

        showLoading();
        apiService.put(`slider-image/${id}`, {
            url: newUrl
        })
            .then(res => {
                showNotification('Cập nhật URL thành công', 'success');
                loadData();
                hideLoading();
            })
            .catch(err => {
                console.log(err);
                showNotification('Đã có lỗi', 'error');
                hideLoading();
            });
    };

    return (
        <Box sx={{ maxWidth: 600 }}>
            <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                Ảnh chi tiết sản phẩm
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Stack direction={'column'} spacing={2}>
                        <Button
                            variant="contained"
                            size='small'
                            startIcon={<Upload />}
                            sx={{ maxWidth: 300 }}
                            onClick={() => fileInputRef.current.click()}
                        >
                            Chọn ảnh
                        </Button>
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            onChange={handleImageChange}
                            style={{ display: 'none' }}
                        />

                        {selectedImage && (
                            <Stack spacing={2}>
                                <img
                                    src={selectedImage.preview}
                                    alt="Preview"
                                    style={{ width: 300 }}
                                />
                                <TextField
                                    label="url"
                                    size='small'
                                    value={urlInput}
                                    onChange={(e) => setUrlInput(e.target.value)}
                                    variant="outlined"
                                    sx={{ maxWidth: 300 }}
                                />
                            </Stack>
                        )}

                        <Button
                            size='small'
                            variant='contained'
                            onClick={handleAdd}
                            sx={{ maxWidth: 300 }}
                        >
                            Thêm
                        </Button>
                    </Stack>
                </Grid>

                <Divider sx={{ my: 2, width: '100%' }} />

                <Grid item xs={12}>
                    {images.length === 0 && <Typography>Hiện chưa có ảnh nào</Typography>}
                </Grid>

                <Grid item xs={12}>
                    {images.map((item, index) => (
                        <Stack key={item.id} direction={'column'} spacing={2} sx={{ position: 'relative', mb: 3 }}>
                            <img
                                srcSet={`${uploadUrl + item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                src={`${uploadUrl + item.image}?w=164&h=164&fit=crop&auto=format`}
                                alt={'Ảnh sản phẩm'}
                                style={{ width: 600 }}
                                loading="lazy"
                            />
                            <IconButton
                                onClick={() => handleRemoveImage(index, item.id)}
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 4,
                                    zIndex: 1300,
                                    backgroundColor: 'rgba(255,255,255,0.7)'
                                }}
                            >
                                <Delete fontSize="small" />
                            </IconButton>
                            <TextField
                                placeholder="url"
                                size='small'
                                fullWidth
                                value={urlUpdates[item.id] ?? item.url ?? ''}
                                onChange={(e) => handleUrlChange(item.id, e.target.value)}
                                variant="outlined"
                                sx={{ maxWidth: 300 }}
                            />
                            <Button
                                size='small'
                                variant="contained"
                                sx={{ maxWidth: 300 }}
                                onClick={() => handleUpdate(item.id)}
                            >
                                Cập nhật
                            </Button>
                            <Divider />
                        </Stack>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
};

export default DetailDrawer;
