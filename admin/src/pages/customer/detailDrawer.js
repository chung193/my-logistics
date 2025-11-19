import React from "react";
import { Stack, TextField, Box, Typography, Grid } from "@mui/material";

const DetailDrawer = ({ data }) => {
    if (!data) return null;

    const { name, email, detail, orders } = data;
    const Item = ({ label, value }) => (
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={1} sx={{ width: '100%', mb: 0 }}>
            <Box sx={{ maxWidth: '50%' }}>
                <Typography fontWeight="500" sx={{ wordBreak: 'break-word', fontSize: 12, m: 0, p: 0 }} >{label}</Typography>
            </Box>
            <Box sx={{ maxWidth: '50%' }}>
                <Typography sx={{ wordBreak: 'break-word', fontSize: 12, m: 0, p: 0 }}>{value}</Typography>
            </Box>
        </Stack>
    );
    return (
        <Box sx={{ width: 600 }}>
            <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                Thông tin khách hàng
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Stack spacing={2}>
                            <TextField
                                label="Tên"
                                value={name || ''}
                                fullWidth
                                size="small"
                                margin="normal"
                                disabled
                            />
                            <TextField
                                label="Email"
                                value={email || ''}
                                fullWidth
                                size="small"
                                margin="normal"
                                disabled
                            />
                            <TextField
                                label="Địa chỉ"
                                value={detail?.address || ''}
                                fullWidth
                                size="small"
                                margin="normal"
                                disabled
                            />
                            <TextField
                                label="Điện thoại"
                                value={detail?.phone || ''}
                                fullWidth
                                size="small"
                                margin="normal"
                                disabled
                            />
                        </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography sx={{ mb: 2 }}>Đơn hàng</Typography>
                        {orders && orders.map(item => <Box sx={{ borderBottom: '1px solid #ecf0f1' }}>
                            <Item label='code' value={item.code} />
                            <Item label='Ngày đặt' value={new Date(item.created_at).toLocaleDateString('vi-VN')} />
                            <Item label='Trạng thái' value={item.status ? 'Hoàn thành' : item.status === 2 ? 'Đã hủy' : 'Mới tạo'} />
                        </Box>)}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default DetailDrawer;
