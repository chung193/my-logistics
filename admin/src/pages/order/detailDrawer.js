// import { Form, Input, Row, Col, Slider, Switch, Button, Notify } from 'uiw';
import React, { useState, useEffect } from "react";
import { slugify } from '@utils/common';
import { Stack, Box, Button, Typography } from "@mui/material";
import apiService from '@services/common'
import Grid from '@mui/material/Grid';
import { useGlobalContext } from '@providers/globalProvider';
import { formatToCurrency } from '@utils/common'
const DetailDrawer = ({ submitFunction = () => { }, id = null }) => {
    const { showNotification, showLoading, hideLoading, openModal, closeModal, openDrawer, closeDrawer, showConfirm, closeConfirm } = useGlobalContext()

    const [data, setData] = useState(null)
    const loadData = () => {
        showLoading()
        apiService.get(`order/${id}`)
            .then(res => {
                setData(res.data.data)
                hideLoading()
            })
            .catch(err => {
                hideLoading()
                console.error(err)
            })
    }
    useEffect(() => {
        loadData()
    }, [])

    const handleComplete = (status) => {
        showLoading()
        apiService.put(`order/${id}`, { status: status })
            .then(res => {
                loadData()
                hideLoading()
            })
            .catch(err => {
                hideLoading()
                console.error(err)
            })
    }

    const Item = ({ label, value }) => (
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={1} sx={{ borderBottom: '1px solid #bdc3c7' }}>
            <Box sx={{ maxWidth: '50%' }}>
                <Typography fontWeight="bold" sx={{ wordBreak: 'break-word' }} >{label}</Typography>
            </Box>
            <Box sx={{ maxWidth: '50%' }}>
                <Typography sx={{ wordBreak: 'break-word' }}>{value}</Typography>
            </Box>
        </Stack>
    );


    return (
        <Box sx={{ maxWidth: '50vw', p: 0 }}>
            <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                Chi tiết đơn hàng
            </Typography>

            {data &&
                <Grid container spacing={2} >
                    <Grid size={6} sx={{ pr: 2 }}>
                        <Stack direction={'column'} spacing={2}>
                            <Item label='code' value={data.code} />
                            <Item label="Tên người nhận" value={data.full_name} />
                            <Item label="Địa chỉ" value={data.address} />
                            <Item label="Điện thoại" value={data.phone} />
                            <Item label="Trạng thái" value={data.status === 1 ? 'Hoàn thành' : data.status === 2 ? 'Đã huỷ' : 'Mới tạo'} />
                            <Item label="Ghi chú" value={data.note} />
                            <Item label="Ngày tạo" value={new Date(data.created_at).toLocaleDateString('vi-VN')} />
                            <Button onClick={() => handleComplete(1)} variant="contained" disabled={data.status === 1 || data.status === 2}>Đánh dấu đã hoàn thành</Button>
                            <Button onClick={() => handleComplete(2)} variant="contained" disabled={data.status === 1 || data.status === 2} color='error'>Huỷ đơn này</Button>
                        </Stack>
                    </Grid>
                    <Grid size={6} sx={{ backgroundColor: '#ecf0f1', p: 2 }}>
                        <Stack direction={'column'} spacing={2}>
                            {data.details.map(item =>
                                <Item value={formatToCurrency(item.product.price)} label={item.product.title} />
                            )}
                            <Item value={formatToCurrency(data.ship)} label='Ship' />
                            <Item value={formatToCurrency(data.total)} label='Tổng' />

                        </Stack>
                    </Grid>
                </Grid>}
        </Box>
    )
}

export default DetailDrawer