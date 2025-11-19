// import { Form, Input, Row, Col, Slider, Switch, Button, Notify } from 'uiw';
import React, { useState, useEffect } from "react";
import { slugify } from '@utils/common';
import { Stack, TextField, Switch, FormControlLabel, Box, Button, Typography, InputLabel, FormControl, Select, MenuItem } from "@mui/material";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import apiService from '@services/common'
import ImageUploadWithPreview from '@components/imageUpload'

const AddDrawer = ({ submitFunction = () => { } }) => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        apiService.get('product-category')
            .then(res => setCategory(res.data.data))
            .catch(err => console.log(err))
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
        defaultValues: {
            is_public: false // giá trị mặc định
        }
    });

    const onSubmit = (data) => {


        submitFunction(data)
    }

    return (
        <Box>
            <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                Thêm mới danh mục sản phẩm
            </Typography>
            <Stack>
                <Box sx={{ maxWidth: 350 }}>
                    <Stack direction={'column'} spacing={2}>
                        <TextField
                            label="Tên danh mục sản phẩm"
                            fullWidth
                            size='small'
                            margin="normal"
                            {...register('title')}
                            error={!!errors.title}
                            helperText={errors.title?.message}
                        />
                        <Controller
                            name="parent_id"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Chọn danh mục cha</InputLabel>
                                    <Select
                                        size='small'
                                        labelId="demo-simple-select-label"
                                        value={field.value}
                                        label="Chọn danh mục"
                                        onChange={field.onChange}
                                    >
                                        {category.map(item => item.parent_id === 0 ? <MenuItem value={item.id}>{item.title}</MenuItem> : null)}
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
                    <Button type="primary" size='small' variant="contained" onClick={handleSubmit(onSubmit)}>Lưu lại</Button>
                </Box>
            </Stack>
        </Box>
    )
}

export default AddDrawer