import React, { useState, useEffect } from 'react';
import {
    Box,
    Tooltip,
    Chip,
    Grid,
    Stack,
    Select,
    Typography,
    TextField,
    IconButton,
    MenuItem,
    InputAdornment,
    Button,
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, Avatar
} from '@mui/material'
import { Add, Download, Delete, Replay, Search, Feed } from '@mui/icons-material'
import Tables from '@components/table';
import apiService from '@services/common'
import { useGlobalContext } from '@providers/globalProvider';
import AddDrawer from './addDrawer';
import DetailDrawer from './detailDrawer'
import { saveAs } from 'file-saver';
import { useSelector, useDispatch } from 'react-redux'
import { updateBreadcrumb } from '@redux/commonReducer'

const Warranty = () => {
    const [data, setData] = useState([])
    const [keyword, setKeyword] = useState('')
    const [selectedRows, setSelectedRows] = useState([])
    const { showNotification, showLoading, hideLoading, openModal, closeModal, openDrawer, closeDrawer, showConfirm, closeConfirm } = useGlobalContext()
    const dispatch = useDispatch()
    const columns = [
        {
            field: 'status',
            headerName: 'Trạng thái',
            width: 150,
            editable: true,
            renderCell: (params) => params.value === 1
                ?
                <Chip label="Hoàn thành" color="primary" />
                : (params.value === 2 ? <Chip label="Huỷ" color="secondary" /> : <Chip label="Mới tạo" color="error" />)
            ,
            renderEditCell: (params) => (
                <Select
                    value={params.value !== undefined ? String(params.value) : ""}
                    onChange={(event) => {
                        const newValue = event.target.value;

                        params.api.setEditCellValue({
                            id: params.id,
                            field: params.field,
                            value: newValue === "1"
                        });
                    }}
                    fullWidth
                >
                    <MenuItem key={1} value="1" selected={params.value === "1"}>
                        Hoàn thành
                    </MenuItem>
                    <MenuItem key={0} value="0" selected={params.value === "0"}>
                        Mới tạo
                    </MenuItem>
                    <MenuItem key={2} value="2" selected={params.value === "2"}>
                        Huỷ
                    </MenuItem>
                </Select>
            )
        },
        {
            field: 'ship',
            headerName: 'Phí ship',
            width: 100,
            editable: false,
            renderCell: (params) => <span>{new Intl.NumberFormat('vi-VN').format(parseFloat(params.value))} đ</span>
        },
        {
            field: 'total',
            headerName: 'Tổng tiền hàng + phí ship',
            width: 200,
            editable: false,
            renderCell: (params) => <span>{new Intl.NumberFormat('vi-VN').format(parseFloat(params.value))} đ</span>
        },
        {
            field: 'code',
            headerName: 'Mã đơn hàng',
            width: 120,
            editable: false,
            renderCell: (params) =>
                <Chip label={params.value} />

        },
        {
            field: 'full_name',
            headerName: 'Tên người nhận',
            width: 200,
            editable: false,
        },
        {
            field: 'address',
            headerName: 'Địa chỉ',
            width: 300,
            editable: false,
        },
        {
            field: 'phone',
            headerName: 'Điện thoại',
            width: 150,
            editable: false,
        },

        {
            field: 'created_at',
            headerName: 'Ngày tạo',
            width: 300,
            editable: false,
            renderCell: (params) => new Date(params.value).toLocaleDateString('vi-VN')
        },
    ];

    const breadcrumb =
        [
            {
                name: 'Tra cứu bảo hành',
                url: 'warranty'
            }
        ]

    const styleButton = {
        backgroundColor: 'transparent',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)'
        },
        border: 'none'
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            apiService.get(`watanrry-info?keyword=${keyword}`)
                .then(res => {
                    setData(res.data.data)
                })
                .catch(err => {
                    showNotification("Đã có lỗi xảy ra, liên hệ quản trị viên để được hỗ trợ", 'error');
                })
        }
    }

    const handleChangeKeyword = (e) => {
        setKeyword(e.target.value)
    }

    useEffect(() => {
        dispatch(updateBreadcrumb(breadcrumb))
    }, [])

    function isWarrantyExpired(startDate, warrantyMonths) {
        const start = new Date(startDate);
        const expiredDate = new Date(start.setMonth(start.getMonth() + warrantyMonths));
        const now = new Date();

        return now > expiredDate;
    }

    return (
        <Box sx={{
            width: '100%'
        }}>
            <Box sx={{ mb: 2 }}>
                <Typography variant='h5'>Tra cứu bảo hành</Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <TextField
                            hiddenLabel
                            defaultValue={keyword}
                            onChange={handleChangeKeyword}
                            onKeyDown={handleKeyDown}
                            placeholder="Nhập code..."
                            variant="outlined"
                            size="small"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Search />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box>
                {data &&
                    data.length > 0 &&
                    <Tables
                        height={200}
                        rows={data}
                        columns={columns}
                        selectedRows={selectedRows}
                        setSelectedRows={setSelectedRows}
                    />
                }
                {data &&
                    <TableContainer component={Paper} sx={{ mt: 2 }}>
                        <Table>
                            <TableHead
                                sx={{ backgroundColor: '#f5f5f5' }}
                            >
                                <TableRow>
                                    <TableCell>Tên sản phẩm</TableCell>
                                    <TableCell>Số lượng</TableCell>
                                    <TableCell>Bảo hành</TableCell>
                                    <TableCell>Trạng thái</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data[0].details?.map((item) => (
                                    <TableRow key={item.id}>

                                        <TableCell>
                                            <Typography variant="body2">
                                                {item.product.title}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>{item.quantity}</TableCell>
                                        <TableCell>{item.product.warranty} tháng</TableCell>
                                        <TableCell>{isWarrantyExpired(data.created_at, item.product.warranty)
                                            ? <Chip label='Hết bảo hành' color='error' />
                                            : <Chip label='Còn bảo hành' color='secondary' />}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                }
            </Box>
        </Box>
    );
}

export default Warranty;