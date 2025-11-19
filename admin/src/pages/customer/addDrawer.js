import React, { useState, useEffect } from "react";
import { Stack, TextField, Switch, FormControlLabel, InputLabel, Select, MenuItem, FormControl, Box, Button, Typography } from "@mui/material";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import apiService from '@services/common'
import { useGlobalContext } from '@providers/globalProvider';

const AddDrawer = ({ submitFunction = () => { } }) => {
    const [roles, setRoles] = useState([])
    const { showNotification, showLoading, hideLoading, openModal, closeModal, openDrawer, closeDrawer, showConfirm, closeConfirm } = useGlobalContext()

    useEffect(() => {
        showLoading()
        apiService.get('role')
            .then(res => {
                setRoles(res.data.data)
                hideLoading()
            })
            .catch(err => {
                console.log(err)
                hideLoading()
            })
    }, [])

    const schema = yup.object({
        name: yup.string().required('Vui lòng nhập tên'),
        email: yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
        password: yup.string().required('Vui lòng nhập mật khẩu').min(6, 'Mật khẩu ít nhất 6 ký tự'),
        confirm_password: yup.string()
            .oneOf([yup.ref('password')], 'Mật khẩu không khớp')
            .required('Vui lòng xác nhận mật khẩu'),
        is_public: yup.boolean()
    });

    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            role: 'customer',
            is_public: false
        }
    });

    const onSubmit = (data) => {
        delete data.confirm_password;
        submitFunction(data);
    };

    return (
        <Box>
            <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                Thêm mới người dùng
            </Typography>
            <Stack>
                <Box sx={{ maxWidth: 350 }}>
                    <TextField
                        label="Tên"
                        fullWidth
                        size="small"
                        margin="normal"
                        {...register('name')}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />
                    <TextField
                        label="Email"
                        fullWidth
                        size="small"
                        margin="normal"
                        {...register('email')}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />

                    <TextField
                        label="Địa chỉ"
                        fullWidth
                        size="small"
                        margin="normal"
                        {...register('address')}
                        error={!!errors.address}
                        helperText={errors.address?.message}
                    />
                    <TextField
                        label="Điện thoại"
                        fullWidth
                        size="small"
                        margin="normal"
                        {...register('phone')}
                        error={!!errors.phone}
                        helperText={errors.phone?.message}
                    />

                    <Controller
                        name="role"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Chọn nhóm quyền</InputLabel>
                                <Select
                                    size='small'
                                    labelId="demo-simple-select-label"
                                    value={field.value}
                                    label="Chọn nhóm quyền"
                                    disabled
                                    onChange={field.onChange}
                                >
                                    <MenuItem value={'customer'} >Customer</MenuItem>
                                </Select>
                            </FormControl>
                        )}
                    />

                    <TextField
                        label="Mật khẩu"
                        type="password"
                        fullWidth
                        size="small"
                        margin="normal"
                        {...register('password')}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />

                    <TextField
                        label="Xác nhận mật khẩu"
                        type="password"
                        fullWidth
                        size="small"
                        margin="normal"
                        {...register('confirm_password')}
                        error={!!errors.confirm_password}
                        helperText={errors.confirm_password?.message}
                    />

                </Box>
                <Box>
                    <Button
                        type="submit"
                        size="small"
                        variant="contained"
                        onClick={handleSubmit(onSubmit)}
                    >
                        Lưu lại
                    </Button>
                </Box>
            </Stack>
        </Box>
    );
};

export default AddDrawer;
