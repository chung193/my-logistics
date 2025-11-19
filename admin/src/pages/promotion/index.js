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
    InputAdornment
} from '@mui/material'
import { Add, Download, Delete, Replay, Search } from '@mui/icons-material'
import Tables from '@components/table';
import apiService from '@services/common'
import { useGlobalContext } from '@providers/globalProvider';
import AddDrawer from './addDrawer';
import { saveAs } from 'file-saver';
import { useSelector, useDispatch } from 'react-redux'
import { updateBreadcrumb } from '@redux/commonReducer'

const Promotion = () => {
    const [data, setData] = useState([])
    const [keyword, setKeyword] = useState('')
    const [selectedRows, setSelectedRows] = useState([])
    const { showNotification, showLoading, hideLoading, openModal, closeModal, openDrawer, closeDrawer, showConfirm, closeConfirm } = useGlobalContext()
    const dispatch = useDispatch()
    const columns = [
        {
            field: 'name',
            headerName: 'Tiêu đề',
            width: 300,
            editable: true,
        },
        {
            field: 'code',
            headerName: 'Code',
            width: 100,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'mô tả',
            width: 300,
            editable: true,
        },
        {
            field: 'type',
            headerName: 'Loại',
            width: 100,
            editable: true,
            renderCell: (params) => <Chip label={params.value} />
        },
        {
            field: 'start_date',
            headerName: 'Ngày bắt đầu',
            width: 120,
            editable: true,
            renderCell: (params) => new Date(params.value).toLocaleDateString('vi-VN')
        },
        {
            field: 'end_date',
            headerName: 'Ngày kết thúc',
            width: 120,
            editable: true,
            renderCell: (params) => new Date(params.value).toLocaleDateString('vi-VN')
        },
        {
            field: 'is_active',
            headerName: 'Trạng thái',
            width: 120,
            editable: true,
            renderCell: (params) =>
                params.value ? <Chip label='Kích hoạt' /> : <Chip label='Bản nháp' color='error' />
        },
        {
            field: 'created_at',
            headerName: 'Ngày tạo',
            width: 120,
            editable: false,
            renderCell: (params) => new Date(params.value).toLocaleDateString('vi-VN')
        },
    ];

    const breadcrumb =
        [
            {
                name: 'Nhãn hiệu',
                url: 'promotion'
            }
        ]

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
        apiService.put(`brand/${newRow.id}`, newRow)
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
            apiService.get(`promotion?keyword=${keyword}`)
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
        apiService.post(`promotion`, data)
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
        apiService.delete(`promotion/${selectedRows}`)
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
        apiService.exportExcel('export/promotion')
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
        apiService.get('promotion')
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
                <Typography variant='h5'>Chương trình khuyến mại</Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <TextField
                            hiddenLabel
                            defaultValue={keyword}
                            onChange={handleChangeKeyword}
                            onKeyDown={handleKeyDown}
                            placeholder="Nhập từ khóa tìm kiếm..."
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
                            <Tooltip placement="bottom" content="Thêm mới">
                                <IconButton
                                    sx={styleButton}
                                    onClick={() => handleAddNew()}
                                >
                                    <Add />
                                </IconButton>
                            </Tooltip>
                            <Tooltip placement="bottom" content="Xoá">
                                <IconButton
                                    sx={styleButton}
                                    disabled={!(selectedRows.length > 0)}
                                    onClick={() => handleDelete()}
                                >
                                    <Delete />
                                </IconButton>
                            </Tooltip>
                            <Tooltip placement="bottom" content="Export excel">
                                <IconButton
                                    sx={styleButton}
                                    onClick={() => loadData()}
                                >
                                    <Replay />
                                </IconButton>
                            </Tooltip>
                            <Tooltip placement="bottom" content="Export excel">
                                <IconButton
                                    sx={styleButton}
                                    onClick={() => handleExport()}
                                >
                                    <Download />
                                </IconButton>
                            </Tooltip>
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

export default Promotion;