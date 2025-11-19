import React, { useState, useRef, useEffect } from "react";
import {
    Grid,
    TextField,
    Typography,
    Box,
    Stack,
    ImageList,
    ImageListItem,
    Button,
    IconButton
} from "@mui/material";
import apiService from '@services/common'
import { useGlobalContext } from '@providers/globalProvider';
import { Delete, Upload } from '@mui/icons-material';
import { uploadUrl } from "@services/axios";

const DetailDrawer = ({ productId = null }) => {
    const [images, setImages] = useState([])
    const { showNotification, showLoading, hideLoading, openModal, closeModal, openDrawer, closeDrawer, showConfirm, closeConfirm } = useGlobalContext()
    const fileInputRef = useRef();

    const loadData = () => {
        showLoading()
        apiService.get(`product-image?product_id=${productId}`)
            .then(res => {
                setImages(res.data.data)
                hideLoading()
            })
            .catch(err => {
                console.log(err)
                hideLoading()
            })
    }
    useEffect(() => {
        loadData()
    }, [])

    // Xử lý khi chọn ảnh mới
    const handleImageChange = (e) => {
        showLoading()
        const files = Array.from(e.target.files);
        const newImages = files.map(file => ({
            file,
            preview: URL.createObjectURL(file),
        }));

        const formData = new FormData();
        newImages.forEach(image => {
            formData.append('images[]', image.file);
        });
        formData.append('product_id', productId);
        apiService.postWithMedia('product-image', formData)
            .then(res => {
                showNotification('Update dữ liệu thành công', 'success')
                loadData()
                hideLoading()
            })
            .catch(err => {
                showNotification('Đã có lỗi', 'error')
                console.log(err)
                hideLoading()
            })
    };


    // Xử lý xóa ảnh
    const handleRemoveImage = (index, id) => {
        showLoading()
        const updated = [...images];
        updated.splice(index, 1);
        apiService.delete(`product-image/${id}`)
            .then(res => {
                showNotification('Update dữ liệu thành công', 'success')
                loadData()
                hideLoading()
            })
            .catch(err => {
                showNotification('Đã có lỗi', 'error')
                console.log(err)
                hideLoading()
            })
    };

    return (
        <Box sx={{ maxWidth: 600 }}>
            <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                Ảnh chi tiết sản phẩm
            </Typography>
            <Grid container spacing={2}>
                <Grid size={12}>
                    <Button
                        variant="contained"
                        startIcon={<Upload />}
                        onClick={() => fileInputRef.current.click()}
                    >
                        Chọn ảnh
                    </Button>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        ref={fileInputRef}
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                    />
                </Grid>
                <Grid size={12}>
                    {images.length === 0 && <Typography> Hiện chưa có ảnh nào</Typography>}
                </Grid>
                <Grid size={12}>
                    <ImageList cols={3} gap={8} sx={{ mt: 2 }}>
                        {images.map((item, index) => (
                            <ImageListItem key={item.image} sx={{ border: '1px solid #ecf0f1', p: 2, borderRadius: 2 }}>
                                <img
                                    srcSet={`${uploadUrl + item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${uploadUrl + item.image}?w=164&h=164&fit=crop&auto=format`}
                                    alt={'Ảnh sản phẩm'}
                                    loading="lazy"
                                />
                                <IconButton
                                    onClick={() => handleRemoveImage(index, item.id)}
                                    sx={{
                                        position: 'absolute',
                                        top: 4,
                                        right: 4,
                                        backgroundColor: 'rgba(255,255,255,0.7)'
                                    }}
                                >
                                    <Delete fontSize="small" />
                                </IconButton>
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DetailDrawer;
