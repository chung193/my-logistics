// import { Form, Input, Row, Col, Slider, Switch, Button, Notify } from 'uiw';
import React, { useEffect, useState } from "react";
import { slugify } from '@utils/common';
import { Stack, TextField, Switch, FormControlLabel, InputLabel, Select, MenuItem, FormControl, Box, Button, Typography } from "@mui/material";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import apiService from '@services/common'
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import ImageUploadWithPreview from '@components/imageUpload'
import { useGlobalContext } from '@providers/globalProvider';
import { uploadUrl } from "@services/axios";

const AddDrawer = ({ submitFunction = () => { }, data = null }) => {
    const [category, setCategory] = useState([])
    const [brand, setBrand] = useState([])
    const [origin, setOrigin] = useState([])
    const { showNotification, showLoading, hideLoading, openModal, closeModal, openDrawer, closeDrawer, showConfirm, closeConfirm } = useGlobalContext()

    useEffect(() => {
        showLoading()
        Promise.all([apiService.get('product-category'), apiService.get('brand'), apiService.get('origin')])
            .then(res => {
                setCategory(res[0].data.data)
                setBrand(res[1].data.data)
                setOrigin(res[2].data.data)
                hideLoading()
            })
            .catch(err => {
                console.log(err)
                hideLoading()
            })
    }, [])

    const schema = yup.object({
        title: yup.string().required('Bắt buộc'),
    });

    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: data
    });

    const onSubmit = (data) => {
        submitFunction(data)
    }

    return (
        <Box sx={{ maxWidth: 600 }}>
            <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                Cập nhật thông tin sản phẩm
            </Typography>
            <Stack>
                <Box>
                    <Stack direction={'column'} spacing={2}>
                        <TextField
                            label="Tiêu đề"
                            fullWidth
                            size='small'
                            margin="normal"
                            {...register('title')}
                            error={!!errors.title}
                            helperText={errors.title?.message}
                        />

                        <TextField
                            label="Bảo hành (tháng)"
                            fullWidth
                            size='small'
                            margin="normal"
                            {...register('warranty')}
                            error={!!errors.warranty}
                            helperText={errors.warranty?.message}
                        />

                        <Controller
                            name="content"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <ReactQuill
                                    theme="snow"
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />

                        <TextField
                            label="Giá"
                            fullWidth
                            size='small'
                            margin="normal"
                            type='number'
                            {...register('price')}
                            error={!!errors.price}
                            helperText={errors.price?.message}
                        />

                        <Controller
                            name="is_show_price"
                            control={control}
                            {...register('is_show_price')}
                            render={({ field }) => (
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Hiển thị giá</InputLabel>
                                    <Select
                                        size='small'
                                        labelId="demo-simple-select-label"
                                        value={field.value}
                                        label="Hiển thị giá"
                                        onChange={field.onChange}
                                    >
                                        <MenuItem value={1}>Hiển thị</MenuItem>
                                        <MenuItem value={0}>Ẩn</MenuItem>
                                    </Select>
                                </FormControl>

                            )}
                        />

                        <TextField
                            label="Kho"
                            fullWidth
                            size='small'
                            margin="normal"
                            type='number'
                            {...register('in_stock')}
                            error={!!errors.in_stock}
                            helperText={errors.in_stock?.message}
                        />

                        <Controller
                            name="product_category_id"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Chọn danh mục</InputLabel>
                                    <Select
                                        size='small'
                                        labelId="demo-simple-select-label"
                                        value={field.value}
                                        label="Chọn danh mục"
                                        onChange={field.onChange}
                                    >
                                        {category.map(item => <MenuItem value={item.id}>{item.title}</MenuItem>)}
                                    </Select>
                                </FormControl>

                            )}
                        />

                        {brand.length > 0 && <Controller
                            name="brand_id"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Chọn nhãn hiệu</InputLabel>
                                    <Select
                                        size='small'
                                        labelId="demo-simple-select-label"
                                        value={field.value}
                                        label="Chọn nhãn hiệu"
                                        onChange={field.onChange}
                                    >
                                        {brand.map(item => <MenuItem value={item.id}>{item.title}</MenuItem>)}
                                    </Select>
                                </FormControl>

                            )}
                        />}

                        {origin.length > 0 && <Controller
                            name="origin_id"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Chọn xuất sứ</InputLabel>
                                    <Select
                                        size='small'
                                        labelId="demo-simple-select-label"
                                        value={field.value}
                                        label="Chọn xuất sứ"
                                        onChange={field.onChange}
                                    >
                                        {origin.map(item => <MenuItem value={item.id}>{item.title}</MenuItem>)}
                                    </Select>
                                </FormControl>

                            )}
                        />}

                        <Controller
                            name="image"
                            control={control}
                            render={({ field }) => (
                                <ImageUploadWithPreview initValue={uploadUrl + field.value} value={field.value} onChange={field.onChange} />
                            )}
                        />
                        {errors.image && (
                            <Box color="red" mt={1}>{errors.image.message}</Box>
                        )}

                        <Controller
                            name="is_public"
                            control={control}
                            render={({ field }) => (
                                <FormControlLabel
                                    control={<Switch {...field} checked={field.value} />}
                                    label="Công khai"
                                />
                            )}
                        />

                    </Stack>
                </Box>

                <Box>
                    <Button type="primary" variant="contained" size='small' onClick={handleSubmit(onSubmit)}>Lưu lại</Button>
                </Box>
            </Stack>
        </Box>
    )
}

export default AddDrawer