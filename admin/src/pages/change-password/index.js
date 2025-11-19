import React, { useState, useEffect } from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    InputAdornment,
    IconButton,
    Stack
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import apiService from '@services/common';
import { useGlobalContext } from '@providers/globalProvider';
import { useDispatch } from 'react-redux';
import { updateBreadcrumb } from '@redux/commonReducer';

const ChangePassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { showNotification, showLoading, hideLoading, openModal, closeModal, openDrawer, closeDrawer, showConfirm, closeConfirm } = useGlobalContext()
    const dispatch = useDispatch();

    const breadcrumb = [
        {
            name: 'Đổi mật khẩu',
            url: 'change-password',
        },
    ];

    useEffect(() => {
        dispatch(updateBreadcrumb(breadcrumb));
    }, [dispatch]);

    // Hàm submit form
    const handleSubmit = async (values, { resetForm }) => {
        showLoading()
        try {
            apiService.post('change-password', {
                current_password: values.oldPassword,
                new_password: values.newPassword,
                new_password_confirmation: values.newPassword,
            })
                .then(res => {
                    hideLoading()
                    showNotification('Đổi mật khẩu thành công', 'success');
                    resetForm()
                })
                .catch(err => {
                    hideLoading()
                    showNotification('Có lỗi xảy ra', 'error');
                })
        } catch (err) {
            hideLoading()
            showNotification('Có lỗi xảy ra', 'error');
        }
    };

    const errorTextStyle = {
        '& .MuiFormHelperText-root': {
            color: 'red',  // Đảm bảo text lỗi là màu đỏ
        }
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ mb: 2 }}>
                <Typography variant="h5">Đổi mật khẩu</Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
                <Formik
                    initialValues={{
                        oldPassword: '',
                        newPassword: '',
                        confirmPassword: '',
                    }}
                    validationSchema={Yup.object({
                        oldPassword: Yup.string().required('Mật khẩu cũ là bắt buộc'),
                        newPassword: Yup.string()
                            .min(6, 'Mật khẩu mới phải có ít nhất 6 ký tự')
                            .required('Mật khẩu mới là bắt buộc'),
                        confirmPassword: Yup.string()
                            .oneOf([Yup.ref('newPassword'), null], 'Mật khẩu xác nhận không khớp')
                            .required('Xác nhận mật khẩu là bắt buộc'),
                    })}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <Stack direction={'column'} spacing={2} sx={{ maxWidth: 350 }}>
                            <Field
                                name="oldPassword"
                                label="Mật khẩu cũ"
                                type={showPassword ? 'text' : 'password'}
                                as={TextField}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                helperText={<ErrorMessage name="oldPassword" />}
                                error={false}
                                sx={errorTextStyle}
                            />

                            <Field
                                name="newPassword"
                                sx={errorTextStyle}
                                label="Mật khẩu mới"
                                type={showPassword ? 'text' : 'password'}
                                as={TextField}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                helperText={<ErrorMessage name="newPassword" />}
                                error={false}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end" sx={{ paddingRight: 0 }}>
                                            <IconButton onClick={() => setShowPassword(!showPassword)}
                                                sx={{
                                                    border: 'none',
                                                    '&:hover': {
                                                        backgroundColor: 'transparent',
                                                    },
                                                }}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <Field
                                name="confirmPassword"
                                label="Xác nhận mật khẩu mới"
                                type={showPassword ? 'text' : 'password'}
                                as={TextField}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                sx={errorTextStyle}
                                helperText={<ErrorMessage name="confirmPassword" />}
                                error={false}
                            />

                            <Button variant="contained" color="primary" fullWidth type="submit">
                                Đổi mật khẩu
                            </Button>
                        </Stack>
                    </Form>
                </Formik>
            </Box>
        </Box>
    );
};

export default ChangePassword;
