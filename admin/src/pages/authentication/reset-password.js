import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import AppTheme from '@templates/shared-theme/AppTheme';
import ColorModeSelect from '@templates/shared-theme/ColorModeSelect';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet';
import { useGlobalContext } from '@providers/globalProvider';
import { resetPassword } from '@services/auth';
import IndexLogo from '@layouts/partials/header/partials/indexLogo';
import { useLocation, useNavigate } from 'react-router-dom';

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '450px',
    },
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
    height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        backgroundImage:
            'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
        backgroundRepeat: 'no-repeat',
        ...theme.applyStyles('dark', {
            backgroundImage:
                'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
        }),
    },
}));

const validationSchema = Yup.object({
    password: Yup.string()
        .min(6, 'Mật khẩu ít nhất 6 ký tự')
        .required('Vui lòng nhập mật khẩu'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Mật khẩu không khớp')
        .required('Vui lòng xác nhận mật khẩu'),
});

export default function ResetPassword(props) {
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const token = queryParams.get('token')
    const email = queryParams.get('email')
    const navigate = useNavigate()


    const { showNotification, showLoading, hideLoading } = useGlobalContext();

    const handleSubmit = (values) => {
        showLoading();
        resetPassword({
            token: token,
            email: email,
            password: values.password,
            password_confirmation: values.confirmPassword
        })
            .then((res) => {
                showNotification('Mật khẩu đã được đặt lại thành công', 'success');
                hideLoading();
                navigate('/login');
            })
            .catch((err) => {
                showNotification('Có lỗi xảy ra, vui lòng thử lại', 'error');
                hideLoading();
            });
    };

    return (
        <AppTheme {...props}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Đặt lại mật khẩu</title>
                <meta name="description" content="Đặt lại mật khẩu" />
            </Helmet>
            <CssBaseline enableColorScheme />
            <SignInContainer direction="column" justifyContent="center">
                <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
                <Card variant="outlined">
                    <IndexLogo />
                    <Typography component="h1" variant="h4">
                        Đặt lại mật khẩu
                    </Typography>

                    <Formik
                        initialValues={{ password: '', confirmPassword: '' }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ values, errors, touched, handleChange, handleSubmit }) => (
                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                noValidate
                                sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
                            >
                                <FormControl>
                                    <FormLabel htmlFor="password">Mật khẩu mới</FormLabel>
                                    <TextField
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="••••••"
                                        fullWidth
                                        required
                                        variant="outlined"
                                        value={values.password}
                                        onChange={handleChange}
                                        error={touched.password && Boolean(errors.password)}
                                        helperText={touched.password && errors.password}
                                    />
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor="confirmPassword">Xác nhận mật khẩu</FormLabel>
                                    <TextField
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="••••••"
                                        fullWidth
                                        required
                                        variant="outlined"
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                        error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                                        helperText={touched.confirmPassword && errors.confirmPassword}
                                    />
                                </FormControl>

                                <Button type="submit" fullWidth variant="contained">
                                    Đặt lại mật khẩu
                                </Button>
                            </Box>
                        )}
                    </Formik>
                </Card>
            </SignInContainer>
        </AppTheme>
    );
}
