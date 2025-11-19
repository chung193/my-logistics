// import { Form, Input, Row, Col, Slider, Switch, Button, Notify } from 'uiw';
import React from "react";
import { slugify } from '@utils/common';
import { Stack, TextField, Switch, FormControlLabel, Box, Button, Typography } from "@mui/material";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const AddDrawer = ({ submitFunction = () => { } }) => {

    const schema = yup.object({
        title: yup.string().required('Bắt buộc'),
        address: yup.string().required('Bắt buộc'),
        hotline: yup.string().required('Bắt buộc'),
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
                Thêm thông tin chi nhánh
            </Typography>
            <Stack>
                <Box sx={{ maxWidth: 350 }}>
                    <TextField
                        label="Tên"
                        fullWidth
                        size='small'
                        margin="normal"
                        {...register('title')}
                        error={!!errors.title}
                        helperText={errors.title?.message}
                    />
                    <TextField
                        label="Địa chỉ"
                        fullWidth
                        size='small'
                        margin="normal"
                        {...register('address')}
                        error={!!errors.address}
                        helperText={errors.address?.message}
                    />
                    <TextField
                        label="Hotline"
                        fullWidth
                        size='small'
                        margin="normal"
                        {...register('hotline')}
                        error={!!errors.hotline}
                        helperText={errors.hotline?.message}
                    />
                    <TextField
                        label="Thời gian mở cửa"
                        fullWidth
                        size='small'
                        margin="normal"
                        {...register('open_time')}
                        error={!!errors.open_time}
                        helperText={errors.open_time?.message}
                    />
                    <TextField
                        label="Mã nhúng map"
                        fullWidth
                        size='small'
                        margin="normal"
                        {...register('embed_map_code')}
                        error={!!errors.embed_map_code}
                        helperText={errors.embed_map_code?.message}
                    />
                    <TextField
                        label="Số điện thoại hỗ trợ khách hàng"
                        fullWidth
                        size='small'
                        margin="normal"
                        {...register('support_phone')}
                        error={!!errors.support_phone}
                        helperText={errors.support_phone?.message}
                    />

                </Box>
                <Box>
                    <Button type="primary" size='small' variant="contained" onClick={handleSubmit(onSubmit)}>Lưu lại</Button>
                </Box>
            </Stack>
        </Box>
    )
}

export default AddDrawer