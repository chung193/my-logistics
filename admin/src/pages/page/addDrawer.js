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
    const [category, setCategory] = useState([])
    useEffect(() => {
        apiService.get('page-category')
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


        console.log(data)
        submitFunction(data)
    }

    return (
        <Box sx={{ maxWidth: 600 }}>
            <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                Thêm mới trang
            </Typography>
            <Stack>
                <Box x>
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
                            label="Tóm tắt"
                            fullWidth
                            multiline
                            size='small'
                            rows={4}
                            margin="normal"
                            {...register('summary')}
                            error={!!errors.summary}
                            helperText={errors.summary?.message}
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

                        <Controller
                            name="page_category_id"
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