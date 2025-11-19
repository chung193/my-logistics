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
    FormControl,
    InputLabel,
    Button,
    Slider,

} from '@mui/material'
import { Add, Download, Delete, Replay, Search, FilterAlt, Info, Create, BurstMode } from '@mui/icons-material'
import Tables from '@components/table';
import apiService from '@services/common'
import { useGlobalContext } from '@providers/globalProvider';
import AddDrawer from './addDrawer';
import EditDrawer from './editDrawer';
import DetailDrawer from './detailDrawer';
import ImagesDrawer from './imagesDrawer'
import { saveAs } from 'file-saver';
import { dataToFormData } from '@utils/common'
import { useSelector, useDispatch } from 'react-redux'
import { updateBreadcrumb } from '@redux/commonReducer'
import { backendUrl } from "@services/axios";

function valuetext(value) {
    if (!Array.isArray(value)) return '';
    const [min, max] = value.map(v => parseFloat(v) * 1000000);
    return `${min.toLocaleString('vi-VN')} đ - ${max.toLocaleString('vi-VN')} đ`;
}

const Product = () => {
    const [data, setData] = useState([])

    const [categories, setCategories] = useState([])
    const [brands, setBrands] = useState([])
    const [origins, setOrigins] = useState([])

    const [categoryId, setCategoryId] = useState(0)
    const [brandId, setBrandId] = useState(0)
    const [originId, setOriginId] = useState(0)
    const [price, setPrice] = React.useState([0.5, 100]);
    const dispatch = useDispatch()
    const handleChangePrice = (event, newValue) => {
        setPrice(newValue);
    };

    const [keyword, setKeyword] = useState('')
    const [selectedRows, setSelectedRows] = useState([])
    const { showNotification, showLoading, hideLoading, openModal, closeModal, openDrawer, closeDrawer, showConfirm, closeConfirm } = useGlobalContext()

    const columns = [

        {
            field: 'updated_at',
            headerName: 'Chi tiết',
            width: 150,
            editable: false,
            renderCell: (params) => (
                <>
                    <IconButton
                        onClick={() => handleShowDetail(params.row.all_attributes, params.row.attribute_fields, params.row.id)}
                        sx={{ border: 'none', alignItems: 'flex-start' }}
                    >
                        <Info />
                    </IconButton>
                    <IconButton
                        onClick={() => handleEdit(params.row)}
                        sx={{ border: 'none', alignItems: 'flex-start' }}
                    >
                        <Create />
                    </IconButton>
                    <IconButton
                        onClick={() => handleShowImages(params.row.images, params.row.id)}
                        sx={{ border: 'none', alignItems: 'flex-start' }}
                    >
                        <BurstMode />
                    </IconButton>
                </>
            )
        },
        {
            field: 'image',
            headerName: 'Ảnh đại diện',
            width: 150,
            editable: false,
            renderCell: (params) => (
                <img
                    src={backendUrl + params.value}
                    alt="Ảnh đại diện"
                    style={{ width: '100px', height: 'auto', objectFit: 'cover', padding: '5px' }}
                />
            )
        },
        {
            field: 'in_stock',
            headerName: 'Kho',
            width: 200,
            editable: true,
            renderCell: (params) => (
                params.value
            )
        },
        {
            field: 'view',
            headerName: 'Lượt xem',
            width: 200,
            editable: true,
            renderCell: (params) => (
                params.value
            )
        },
        {
            field: 'warranty',
            headerName: 'Bảo hành',
            width: 200,
            editable: true,
            renderCell: (params) => (
                params.value + ' tháng'
            )
        },
        {
            field: 'title',
            headerName: 'Tiêu đề',
            width: 200,
            editable: true,
        },
        {
            field: 'category',
            headerName: 'Thuộc danh mục',
            width: 200,
            editable: false,
            renderCell: (params) => (
                <Chip label={params.row?.category?.title} color='info' />
            )
        },
        {
            field: 'brand',
            headerName: 'Hãng',
            width: 100,
            editable: false,
            renderCell: (params) => (
                <Chip label={params.row?.brand?.title} color='success' />
            )
        },
        {
            field: 'origin',
            headerName: 'Xuất sứ',
            width: 200,
            editable: false,
            renderCell: (params) => (
                <Chip label={params.row?.origin?.title} color='secondary' />
            )
        },
        {
            field: 'price',
            headerName: 'Giá',
            width: 150,
            editable: false,
            renderCell: (params) => (
                <Chip label={new Intl.NumberFormat('vi-VN').format(params.value)} color='primary' />
            )
        },
        {
            field: 'slug',
            headerName: 'slug',
            width: 200,
            editable: true,
        },
        {
            field: 'is_public',
            headerName: 'Hiển thị',
            width: 100,
            editable: true,
            renderCell: (params) => params.value ? <Chip label="Hiển thị" color="primary" /> : <Chip label="Ẩn" color="error" />,
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
                        Hiển thị
                    </MenuItem>
                    <MenuItem key={0} value="0" selected={params.value === "0"}>
                        Ẩn
                    </MenuItem>
                </Select>
            )
        },
    ];

    const breadcrumb =
        [
            {
                name: 'Sản phẩm',
                url: 'product'
            }
        ]

    const styleButton = {
        backgroundColor: 'transparent',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)'
        },
        border: 'none'
    }

    const handleEdit = (data) => {
        openDrawer({
            content: <EditDrawer submitFunction={doUpdate} data={data} />,
            onCloseCallback: () => { }
        })
    }

    const handleShowImages = (data, id) => {
        openDrawer({
            content: <ImagesDrawer productId={id} images={data} />,
            onCloseCallback: () => { }
        })
    }

    const doUpdate = (data) => {
        delete data.category
        showLoading()
        const formData = dataToFormData(data)

        apiService.putWithMedia(`product/${data.id}`, formData)
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

    const handleShowDetail = (all, field, id) => {
        openDrawer({
            content: <DetailDrawer allAttributes={all} attributeFields={field} productId={id} handleSubmit={doAddNew} />,
            onCloseCallback: () => { }
        })
    }

    const processRowUpdate = (newRow, oldRow) => {
        showLoading()
        setData((prevRows) =>
            prevRows.map((row) => (row.id === oldRow.id ? { ...newRow } : row))
        )
        apiService.put(`product/${newRow.id}`, newRow)
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
            apiService.get(`product?keyword=${keyword}`)
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
        const formData = dataToFormData(data)
        apiService.postWithMedia(`product`, formData)
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
        apiService.delete(`product/${selectedRows}`)
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
        apiService.exportExcel('export/product')
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
        apiService.get('product')
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

    useEffect(() => {
        showLoading()
        Promise.all([apiService.get('brand'), apiService.get('product-category'), apiService.get('origin')])
            .then(res => {
                setBrands(res[0].data.data)
                setCategories(res[1].data.data)
                setOrigins(res[2].data.data)
                hideLoading()
            })
            .catch(err => {
                console.error(err)
                hideLoading()
            })
    }, [])

    const handleFilter = () => {
        showLoading()
        apiService.get(`product?brand_id=${brandId}&product_category_id=${categoryId}&origin_id=${originId}&price_from=${parseFloat(price[0]) * 1000000}&price_to=${parseFloat(price[1]) * 1000000}`)
            .then(res => {
                setData(res.data.data)
                hideLoading()
            })
            .catch(err => {
                console.error(err)
                showNotification('Đã có lỗi xảy ra, liên hệ quản trị viên', 'error')
            })
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box>
                <Typography variant='h5' sx={{ mb: 2 }}>Quản lý sản phẩm</Typography>
            </Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }} sx={{ mb: 2 }}>

                        <TextField
                            sx={{ minWidth: 250 }}
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
                        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', width: '100%', overflow: 'auto' }}
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
                                    color="error"
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
                    <Grid size={{ xs: 12, md: 12 }} sx={{ mb: 2, pt: 2, width: '100%', overflow: 'auto' }}>
                        <Stack direction={'row'} spacing={2} sx={{ pt: 2 }}>
                            <FormControl sx={{ minWidth: 150 }}>
                                <InputLabel id="demo-simple-select-label">Chọn danh mục</InputLabel>
                                <Select
                                    size='small'
                                    labelId="demo-simple-select-label"
                                    value={categoryId}
                                    label="Chọn danh mục"
                                    onChange={(e) => setCategoryId(e.target.value)}
                                >
                                    <MenuItem value={0}>Không lọc</MenuItem>
                                    {categories.map(item => <MenuItem value={item.id}>{item.title}</MenuItem>)}
                                </Select>
                            </FormControl>

                            <FormControl sx={{ minWidth: 150 }}>
                                <InputLabel id="demo-simple-select-label">Chọn nhãn hiệu</InputLabel>
                                <Select
                                    size='small'
                                    labelId="demo-simple-select-label"
                                    value={brandId}
                                    label="nhãn hiệu"
                                    onChange={(e) => setBrandId(e.target.value)}
                                >
                                    <MenuItem value={0}>Không lọc</MenuItem>
                                    {brands.map(item => <MenuItem value={item.id}>{item.title}</MenuItem>)}
                                </Select>
                            </FormControl>

                            <FormControl sx={{ minWidth: 150 }}>
                                <InputLabel id="demo-simple-select-label">Chọn xuất sứ</InputLabel>
                                <Select
                                    size='small'
                                    labelId="demo-simple-select-label"
                                    value={originId}
                                    label="Chọn danh mục"
                                    onChange={(e) => setOriginId(e.target.value)}
                                >
                                    <MenuItem value={0}>Không lọc</MenuItem>
                                    {origins.map(item => <MenuItem value={item.id}>{item.title}</MenuItem>)}
                                </Select>
                            </FormControl>

                            <Slider
                                getAriaLabel={() => 'Price range'}
                                value={price}
                                sx={{ maxWidth: 200 }}
                                onChange={handleChangePrice}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                            />

                            <Typography sx={{ minWidth: 100, pt: 0 }}>{valuetext(price)}</Typography>

                            <Button
                                onClick={() => handleFilter()}
                                variant='outlined'
                                color='secondary'
                                size='small'
                                startIcon={<FilterAlt />}
                            >
                                Lọc
                            </Button>
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

export default Product;