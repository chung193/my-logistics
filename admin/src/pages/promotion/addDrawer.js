import React, { useEffect, useState } from "react";
import {
    Stack,
    TextField,
    FormControlLabel,
    Switch,
    Box,
    Button,
    Typography,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    Checkbox,
    ListItemText
} from "@mui/material";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import apiService from '@services/common';
import { slugify } from '@utils/common';

const schema = yup.object({
    name: yup.string().required('Tên chương trình là bắt buộc'),
    code: yup.string(),
    section: yup.string(),
    type: yup.string().oneOf(['percent', 'amount', 'gift']).required('Chọn loại'),
    value: yup.number().typeError('Phải là số').required('Giá trị là bắt buộc'),
    start_date: yup.date().required('Chọn ngày bắt đầu'),
    end_date: yup.date()
        .min(yup.ref('start_date'), 'Ngày kết thúc không được trước ngày bắt đầu')
        .required('Chọn ngày kết thúc'),
});

const AddDrawer = ({ submitFunction = () => { } }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const { register, handleSubmit, control, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: '',
            code: '',
            type: 'percent',
            value: '',
            start_date: '',
            end_date: '',
            products: [],
            categories: [],
            is_active: true
        }
    });

    useEffect(() => {
        // load products & categories để select
        apiService.get('product').then(r => setProducts(r.data.data)).catch(console.error);
        apiService.get('product-category').then(r => setCategories(r.data.data)).catch(console.error);
    }, []);

    const onSubmit = data => {
        data.slug = slugify(data.name);
        submitFunction(data);
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ p: 2, width: 600 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
                Thêm chương trình khuyến mại
            </Typography>
            <Stack spacing={2}>
                <TextField
                    label="Tên chương trình"
                    size="small"
                    {...register('name')}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                />

                <TextField
                    label="Mã khuyến mại"
                    size="small"
                    {...register('code')}
                    error={!!errors.code}
                    helperText={errors.code?.message}
                />

                <FormControl size="small" error={!!errors.type}>
                    <InputLabel>Loại</InputLabel>
                    <Controller
                        name="type"
                        control={control}
                        render={({ field }) => (
                            <Select label="Loại" {...field}>
                                <MenuItem value="percent">Giảm %</MenuItem>
                                <MenuItem value="amount">Giảm tiền</MenuItem>
                                <MenuItem value="gift">Tặng quà</MenuItem>
                            </Select>
                        )}
                    />
                    <Typography variant="caption" color="error">{errors.type?.message}</Typography>
                </FormControl>

                <FormControl size="small" error={!!errors.type}>
                    <InputLabel>Section</InputLabel>
                    <Controller
                        name="section"
                        control={control}
                        render={({ field }) => (
                            <Select label="Loại" {...field}>
                                <MenuItem value="flash">flash</MenuItem>
                                <MenuItem value="for_you">for you</MenuItem>
                            </Select>
                        )}
                    />
                    <Typography variant="caption" color="error">{errors.section?.message}</Typography>
                </FormControl>

                <TextField
                    label="Giá trị"
                    size="small"
                    type="number"
                    {...register('value')}
                    error={!!errors.value}
                    helperText={errors.value?.message}
                />

                <TextField
                    label="Bắt đầu"
                    type="datetime-local"
                    size="small"
                    InputLabelProps={{ shrink: true }}
                    {...register('start_date')}
                    error={!!errors.start_date}
                    helperText={errors.start_date?.message}
                />

                <TextField
                    label="Kết thúc"
                    type="datetime-local"
                    size="small"
                    InputLabelProps={{ shrink: true }}
                    {...register('end_date')}
                    error={!!errors.end_date}
                    helperText={errors.end_date?.message}
                />

                <Controller
                    name="products"
                    control={control}
                    render={({ field }) => (
                        <FormControl size="small" >
                            <InputLabel>Sản phẩm</InputLabel>
                            <Select
                                label="Sản phẩm"
                                multiple

                                renderValue={vals => vals.map(id => {
                                    const p = products.find(x => x.id === id);
                                    return p ? p.title : id;
                                }).join(', ')}
                                {...field}
                            >
                                {products.map(p => (
                                    <MenuItem key={p.id} value={p.id}
                                        sx={{
                                            width: 550,
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        }}
                                    >
                                        <Checkbox checked={field.value.includes(p.id)} />
                                        <ListItemText primary={p.title} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                />

                <Controller
                    name="categories"
                    control={control}
                    render={({ field }) => (
                        <FormControl size="small">
                            <InputLabel>Danh mục</InputLabel>
                            <Select
                                label="Danh mục"
                                multiple
                                renderValue={vals => vals.map(id => {
                                    const c = categories.find(x => x.id === id);
                                    return c ? c.name : id;
                                }).join(', ')}
                                {...field}
                            >
                                {categories.map(c => (
                                    <MenuItem key={c.id} value={c.id}>
                                        <Checkbox checked={field.value.includes(c.id)} />
                                        <ListItemText primary={c.title} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                />

                <FormControlLabel
                    control={<Controller
                        name="is_active"
                        control={control}
                        render={({ field }) => <Switch {...field} checked={field.value} />}
                    />}
                    label="Công khai"
                />

                <Box>
                    <Button
                        type="submit"
                        variant="contained"
                        size="small"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Đang lưu...' : 'Lưu lại'}
                    </Button>
                </Box>
            </Stack>
        </Box >
    );
};

export default AddDrawer;
