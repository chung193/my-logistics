import React from "react";
import { Stack, TextField, Switch, FormControlLabel, Box, Button, Typography } from "@mui/material";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const AddDrawer = ({ submitFunction = () => { } }) => {
    const schema = yup.object({
        name: yup.string().required('Vui lòng nhập tên'),
        guard_name: yup.string().required('Vui lòng nhập guard name'),
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
        delete data.confirm_password; // không cần gửi lên
        submitFunction(data);
    };

    return (
        <Box>
            <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                Thêm mới role
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
                        label="guard name"
                        fullWidth
                        size="small"
                        margin="normal"
                        {...register('guard_name')}
                        error={!!errors.guard_name}
                        helperText={errors.guard_name?.message}
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
