import React, { useState, useEffect } from 'react';
import {
    Box,
    Tooltip,
    Grid,
    Stack,
    Typography,
    TextField,
    IconButton,
    Button,
    TableContainer,
    Paper,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Alert
} from '@mui/material'
import { Replay } from '@mui/icons-material'
import apiService from '@services/common'
import { useGlobalContext } from '@providers/globalProvider';
import { useSelector, useDispatch } from 'react-redux'
import { updateBreadcrumb } from '@redux/commonReducer'

const Setting = () => {
    const [data, setData] = useState([])
    const { showNotification, showLoading, hideLoading } = useGlobalContext()
    const dispatch = useDispatch()
    const breadcrumb =
        [
            {
                name: 'Cài đặt',
                url: 'setting'
            }
        ]

    const styleButton = {
        backgroundColor: 'transparent',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)'
        },
        border: 'none'
    }

    const loadData = () => {
        showLoading()
        apiService.get('setting/1')
            .then(res => {
                setData(res.data.data)
                hideLoading()
            })
            .catch(err => {
                console.log(err)
                showNotification('Đã có lỗi', 'error')
                hideLoading()
            })
    }

    useEffect(() => {
        loadData()
        dispatch(updateBreadcrumb(breadcrumb))
    }, [])

    const handleUpdate = (key, value) => {
        setData((prev) => ({
            ...prev,
            [key]: value
        }));

        processUpdate({ ...data, [key]: value });
    };

    const processUpdate = (data) => {
        apiService.put(`setting/1`, data)
            .then(res => {
                showNotification("Update thành công", 'success');
                hideLoading()
            })
            .catch(err => {
                showNotification("Đã có lỗi xảy ra, liên hệ quản trị viên để được hỗ trợ", 'error');
                hideLoading()
            })
    }

    const handleChange = (key) => (e) => {
        setData({ ...data, [key]: e.target.value });
    };

    return (
        <Box sx={{
            width: '100%'
        }}>
            <Box sx={{ mb: 2 }}>
                <Typography variant='h5'>Cài đặt trang</Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
                <Grid container spacing={2}>
                    <Grid
                        size={{ xs: 12, md: 12 }}
                        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
                    >
                        <Stack spacing={2} sx={{ width: '100%' }}>
                            <Alert severity="warning" variant="filled"
                                action={
                                    <Button color="inherit" size="small"
                                        onClick={() => loadData()}>
                                        <strong>RELOAD</strong>
                                    </Button>
                                }
                            >
                                Cẩn thận khi cập nhật phần này
                            </Alert>

                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                            {Object.entries(data)
                                .filter(([key]) => !['id', 'created_at', 'updated_at'].includes(key))
                                .map(([key, value]) => (
                                    <TableRow key={key}>
                                        <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                                            {key}
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                fullWidth
                                                variant="standard"
                                                value={value}
                                                onChange={handleChange(key)}
                                                onBlur={(e) => handleUpdate(key, e.target.value)}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>

                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}

export default Setting;