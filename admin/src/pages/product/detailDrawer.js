import React, { useState } from "react";
import { Grid, TextField, Typography, Box, Stack } from "@mui/material";
import apiService from '@services/common'
import { useGlobalContext } from '@providers/globalProvider';

const DetailDrawer = ({ allAttributes, attributeFields, productId, handleSubmit }) => {
    // Gộp data: map attribute → value nếu có
    const { showNotification, showLoading, hideLoading, openModal, closeModal, openDrawer, closeDrawer, showConfirm, closeConfirm } = useGlobalContext()

    const [fields, setFields] = useState(() => {
        const initial = {};
        allAttributes.forEach(attr => {
            const found = attributeFields.find(a => a.id === attr.id);
            initial[attr.id] = found?.pivot?.value || "";
        });
        return initial;
    });

    // Handle change + gọi API cập nhật ngay lập tức
    const handleChange = async (attrId, value) => {
        setFields(prev => ({ ...prev, [attrId]: value }));
    };

    const handleBlur = (id) => {
        showLoading()
        const value = fields[id];
        try {
            apiService.post(`product-attribute`, {
                product_id: productId,
                attribute_id: id,
                value: value
            })
                .then(res => {
                    hideLoading()
                    showNotification('Update dữ liệu thành công', 'success')
                })
                .catch(err => {
                    showNotification('Đã có lỗi', 'error')
                    hideLoading()
                })
            // Có thể thêm toast thông báo success nếu cần
        } catch (error) {
            console.error("Error saving attribute", error);
        }
    }

    return (
        <Box sx={{ maxWidth: 600 }}>
            <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                Cấu hình chi tiết
            </Typography>
            <Grid container spacing={2}>
                <Stack direction={'column'} spacing={2}>
                    {allAttributes.map(attr => (
                        <Stack direction={'row'} spacing={2} key={attr.id}>
                            <Grid item size={4}>
                                <Typography>{attr.title}</Typography>
                            </Grid>
                            <Grid item size={8}>
                                <TextField
                                    fullWidth
                                    multiline
                                    value={fields[attr.id]}
                                    onChange={(e) => handleChange(attr.id, e.target.value)}
                                    onBlur={() => handleBlur(attr.id)}
                                    placeholder={`Nhập ${attr.title.toLowerCase()}`}
                                    size="small"
                                    minRows={1}
                                    maxRows={10}
                                />
                            </Grid>
                        </Stack>
                    ))}
                </Stack>
            </Grid>
        </Box>
    );
};

export default DetailDrawer;
