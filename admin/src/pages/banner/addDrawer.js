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

const AddDrawer = ({ submitFunction = () => { } }) => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        apiService.get(`product-category`)
            .then(res => { setCategories(res.data.data) })
            .catch(err => { console.error(err) })
    }, [])
    const schema = yup.object({
        path: yup.string().required('Bắt buộc'),
        position: yup.string().required('Bắt buộc'),
    });

    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        submitFunction(data)
    }

    return (
        <Box sx={{ width: 600 }}>
            <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                Thêm mới banner
            </Typography>
            <Stack>
                <Box sx={{ mb: 2 }}>
                    <Stack direction={'column'} spacing={2}>
                        <TextField
                            label="đường dẫn"
                            fullWidth
                            size='small'
                            margin="normal"
                            {...register('path')}
                            error={!!errors.path}
                            helperText={errors.path?.message}
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
                                        {categories.map(item => <MenuItem value={item.id}>{item.title}</MenuItem>)}
                                    </Select>
                                </FormControl>
                            )}
                        />

                        <Controller
                            name="position"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Vị trí</InputLabel>
                                    <Select
                                        size='small'
                                        labelId="demo-simple-select-label"
                                        value={field.value}
                                        label="Chọn vị trí"
                                        onChange={field.onChange}
                                    >
                                        <MenuItem value='top'>Top banner</MenuItem>
                                        <MenuItem value='home'>Home</MenuItem>
                                        <MenuItem value='bottom_of_slider'>Phía dưới slider</MenuItem>
                                        <MenuItem value='category'>Cho từng danh mục</MenuItem>
                                    </Select>
                                </FormControl>
                            )}
                        />

                        <Controller
                            name="image"
                            control={control}
                            render={({ field }) => (
                                <ImageUploadWithPreview value={field.value} onChange={field.onChange} />
                            )}
                        />
                        {errors.image && (
                            <Box color="red" mt={1}>{errors.image.message}</Box>
                        )}

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