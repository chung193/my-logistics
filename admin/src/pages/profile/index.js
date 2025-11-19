import React, { useState, useEffect } from 'react';
import {
    Box,
    TableContainer,
    Paper,
    Grid,
    Table,
    TableBody,
    Typography,
    TextField,
    TableRow,
    TableCell,
    Button,
    Avatar
} from '@mui/material'
import { Add, Download, Delete, Replay, Search, KeyboardArrowDown, KeyboardArrowRight } from '@mui/icons-material'
import Tables from '@components/table';
import apiService from '@services/common'
import { useGlobalContext } from '@providers/globalProvider';
import { saveAs } from 'file-saver';
import { useSelector, useDispatch } from 'react-redux'
import { updateBreadcrumb } from '@redux/commonReducer'

const Profile = () => {
    const [data, setData] = useState([])
    const { showNotification, showLoading, hideLoading, openModal, closeModal, openDrawer, closeDrawer, showConfirm, closeConfirm } = useGlobalContext()
    const dispatch = useDispatch()

    const breadcrumb =
        [
            {
                name: 'Trang cá nhân',
                url: 'profile'
            }
        ]

    const handleUpdate = (key, value) => {
        setData((prev) => ({
            ...prev,
            [key]: value
        }));

        processUpdate({ ...data, [key]: value });
    };

    const processUpdate = (data) => {
        apiService.put(`user`, data)
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

    const loadData = () => {
        showLoading()
        apiService.get('profile')
            .then(res => {
                setData(res.data.data)
                hideLoading()
            })
            .catch(err => {
                console.log(err)
                showNotification('Đã có lỗi, liên hệ quản trị viên để được hỗ trợ', 'error')
                hideLoading()
            })
    }


    useEffect(() => {
        loadData()
        dispatch(updateBreadcrumb(breadcrumb))
    }, [])

    return (
        <Box sx={{
            width: '100%'
        }}>
            <Box sx={{ mb: 2 }}>
                <Typography variant='h5'>Thông tin cá nhân</Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
                <Button
                    color="secondary"
                    size="small"
                    onClick={() => loadData()}
                    variant='contained'
                    sx={{ height: 25 }}
                >
                    <strong>RELOAD</strong>
                </Button>
            </Box>
            <Box sx={{ mb: 2 }}>
                <Grid container spacing={2}>
                    <Box>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableBody>
                                    <TableRow key={1044440404}>
                                        <TableCell>
                                            <Avatar
                                                sizes="small"
                                                src="/avatar.webp"
                                                sx={{ width: 80, height: 80 }}
                                            />
                                        </TableCell>
                                        {Object.entries(data)
                                            .filter(([key]) => !['id', 'created_at', 'updated_at', 'email_verified_at'].includes(key))
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
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Grid>
            </Box>
        </Box>
    );
}

export default Profile;