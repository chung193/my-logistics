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
    Button
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

const Order = () => {
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
            field: 'slug',
            headerName: 'Chi tiết',
            width: 100,
            editable: true,
            renderCell: (params) => {
                return (<IconButton sx={{ border: 'none' }} onClick={() => handleViewDetail(params.id)}><Feed /></IconButton >)
            }
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
                name: 'Đơn hàng',
                url: 'order'
            }
        ]

    const handleViewDetail = (id) => {
        openDrawer({
            content: <DetailDrawer submitFunction={doAddNew} id={id} />,
            onCloseCallback: () => { }
        })
    }

    const styleButton = {
        backgroundColor: 'transparent',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)'
        },
        border: 'none'
    }

    const processRowUpdate = (newRow, oldRow) => {
        showLoading()
        setData((prevRows) =>
            prevRows.map((row) => (row.id === oldRow.id ? { ...newRow } : row))
        )
        apiService.put(`order/${newRow.id}`, newRow)
            .then(res => {
                showNotification("Update thành công", 'success');
                hideLoading()
            })
            .catch(err => {
                showNotification("Đã có lỗi xảy ra, liên hệ quản trị viên để được hỗ trợ", 'error');
                hideLoading()
            })
        return newRow
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            apiService.get(`order?keyword=${keyword}`)
                .then(res => {
                    setData(res.data.data)
                })
                .catch(err => {
                    showNotification("Đã có lỗi xảy ra, liên hệ quản trị viên để được hỗ trợ", 'error');
                })
        }
    }


    const handleAddNew = () => {
        openDrawer({
            content: <AddDrawer submitFunction={doAddNew} />,
            onCloseCallback: () => { }
        })
    }

    const doAddNew = (data) => {
        showLoading()
        apiService.post(`order`, data)
            .then(res => {
                loadData()
                hideLoading()
                showNotification(
                    'Gửi đi thành công',
                    'success'
                );
            })
            .catch(err => {
                hideLoading()
                showNotification(err.message, 'error')
            })
    }

    const doDelete = () => {
        showLoading()
        apiService.delete(`order/${selectedRows}`)
            .then(res => {
                loadData()
                setSelectedRows([])
                closeConfirm()
                showNotification('Xoá thành công', 'success')
            })
            .catch(err => {
                showNotification(err.message, 'error')
            })
    }

    const handleDelete = () => {
        showConfirm({
            title: 'Xác nhận xóa',
            content: 'Bạn có chắc muốn xoá bản ghi này? Sau khi xoá, dữ liệu có thể không khôi phục lại được',
            onConfirm: () => doDelete(),
            oncancel: () => closeConfirm()
        })
    }

    const handleExport = () => {
        apiService.exportExcel('export/order')
            .then(res => {
                const blob = new Blob([res.data], {
                    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                });
                saveAs(blob, 'report.xlsx');
                showNotification('Export dữ liệu thành công', 'success')
            })
            .catch(err => {
                showNotification(err.message, 'error')
            })
    }

    const loadData = () => {
        showLoading()
        apiService.get('order')
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

    const handleChangeKeyword = (e) => {
        setKeyword(e.target.value)
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
                <Typography variant='h5'>Đơn hàng</Typography>
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
                    <Grid
                        size={{ xs: 12, md: 6 }}
                        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}
                    >
                        <Stack direction={'row'} spacing={0}>
                            {/* <Tooltip placement="bottom" content="Thêm mới">
                                <IconButton
                                    sx={styleButton}
                                    onClick={() => handleAddNew()}
                                >
                                    <Add />
                                </IconButton>
                            </Tooltip> */}
                            {/* <Tooltip placement="bottom" content="Xoá">
                                <IconButton
                                    sx={styleButton}
                                    disabled={!(selectedRows.length > 0)}
                                    onClick={() => handleDelete()}
                                >
                                    <Delete />
                                </IconButton>
                            </Tooltip> */}
                            <Tooltip placement="bottom" content="Export excel">
                                <IconButton
                                    sx={styleButton}
                                    onClick={() => loadData()}
                                >
                                    <Replay />
                                </IconButton>
                            </Tooltip>
                            {/* <Tooltip placement="bottom" content="Export excel">
                                <IconButton
                                    sx={styleButton}
                                    onClick={() => handleExport()}
                                >
                                    <Download />
                                </IconButton>
                            </Tooltip> */}
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                {data &&
                    data.length > 0 &&
                    <Tables
                        rows={data}
                        columns={columns}
                        selectedRows={selectedRows}
                        setSelectedRows={setSelectedRows}
                        processRowUpdate={processRowUpdate} />
                }
            </Box>
        </Box>
    );
}

export default Order;