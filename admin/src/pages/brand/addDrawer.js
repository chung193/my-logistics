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
        title: yup.string().required('Bắt buộc'),
    });

    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {}
    });

    const onSubmit = (data) => {
        submitFunction(data)
    }

    return (
        <Box>
            <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                Thêm mới nhà cung cấp
            </Typography>
            <Stack>
                <Box sx={{ maxWidth: 350 }}>
                    <Stack direction={'column'} spacing={2}>
                        <TextField
                            label="Tên"
                            fullWidth
                            size='small'
                            margin="normal"
                            {...register('title')}
                            error={!!errors.title}
                            helperText={errors.title?.message}
                        />

                        <Controller
                            name="image"
                            control={control}
                            render={({ field }) => (
                                <ImageUploadWithPreview value={field.value} onChange={field.onChange} />
                            )}
                        />

                        <Box>
                            <Button type="primary" size='small' variant="contained" onClick={handleSubmit(onSubmit)}>Lưu lại</Button>
                        </Box>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}

export default AddDrawer