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
import { uploadUrl } from "@services/axios";
const EditDrawer = ({ submitFunction = () => { }, data }) => {
    const schema = yup.object({
        title: yup.string().required('Bắt buộc'),
    });

    data.image = data.images[0].image
    data.url = data.images[0].url
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
        <Box sx={{ minWidth: 600 }}>
            <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                Sửa slider
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
                            {...register('description')}
                            error={!!errors.description}
                            helperText={errors.description?.message}
                        />

                        <TextField
                            label="URL"
                            fullWidth
                            size='small'
                            margin="normal"
                            {...register('url')}
                            error={!!errors.url}
                            helperText={errors.url?.message}
                        />

                        <Controller
                            name="image"
                            control={control}
                            render={({ field }) => {
                                return (
                                    <ImageUploadWithPreview value={field.value} initValue={uploadUrl + field.value} onChange={field.onChange} />
                                )
                            }
                            }
                        />
                        {errors.image && (
                            <Box color="red" mt={1}>{errors.image.message}</Box>
                        )}

                    </Stack>
                </Box>

                <Box>
                    <Button type="primary" variant="contained" size='small' onClick={handleSubmit(onSubmit)}>Cập nhật</Button>
                </Box>
            </Stack>
        </Box>
    )
}

export default EditDrawer