// import { Form, Input, Row, Col, Slider, Switch, Button, Notify } from 'uiw';
import React from "react";
import { slugify } from '@utils/common';
import { Stack, TextField, Switch, FormControlLabel, Box, Button, Typography } from "@mui/material";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ImageUploadWithPreview from '@components/imageUpload'

const AddDrawer = ({ submitFunction = () => { } }) => {

    const schema = yup.object({
        method_type: yup.string().required('Bắt buộc'),
        details: yup.string().required('Bắt buộc'),
    });

    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
        }
    });

    const onSubmit = (data) => {
        submitFunction(data)
    }

    return (
        <Box>
            <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                Thêm thông tin chi nhánh
            </Typography>
            <Stack>
                <Box sx={{ maxWidth: 350, mb: 2 }}>
                    <TextField
                        label="Loại (cash hoặc banking)"
                        fullWidth
                        size='small'
                        margin="normal"
                        {...register('method_type')}
                        error={!!errors.method_type}
                        helperText={errors.method_type?.message}
                    />
                    <TextField
                        label="Mô tả"
                        fullWidth
                        size='small'
                        margin="normal"
                        {...register('details')}
                        error={!!errors.details}
                        helperText={errors.details?.message}
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

                </Box>
                <Box>
                    <Button type="primary" size='small' variant="contained" onClick={handleSubmit(onSubmit)}>Lưu lại</Button>
                </Box>
            </Stack>
        </Box>
    )
}

export default AddDrawer