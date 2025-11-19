import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { forgot } from '@services/auth';
import { useGlobalContext } from '@providers/globalProvider';

const validationSchema = yup.object({
  email: yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
});

function ForgotPassword({ open, handleClose }) {
  const { showNotification, showLoading, hideLoading } = useGlobalContext()

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      showLoading()
      forgot({ email: values.email })
        .then(res => {
          showNotification('Đường dẫn đặt lại mật khẩu đã được gửi vào email cho bạn', 'success')
          hideLoading()
          handleClose();
        })
        .catch(err => {
          showNotification('Đã xảy ra lỗi', 'error')
          hideLoading()
          handleClose();
        });

    },
  });


  return (
    <Dialog
      open={open}
      onClose={handleClose}
      slotProps={{
        paper: {
          component: 'form',
          onSubmit: formik.handleSubmit,
          sx: { backgroundImage: 'none' },
        },
      }}
    >
      <DialogTitle>Đặt lại mật khẩu</DialogTitle>
      <DialogContent
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
      >
        <DialogContentText>
          Nhập địa chỉ email của tài khoản và chúng tôi sẽ gửi cho bạn liên kết để đặt lại mật khẩu.
        </DialogContentText>
        <OutlinedInput
          autoFocus
          required
          margin="dense"
          id="email"
          name="email"
          placeholder="Email địa chỉ"
          type="email"
          fullWidth
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        {formik.touched.email && formik.errors.email && (
          <span style={{ color: 'red', fontSize: 12 }}>{formik.errors.email}</span>
        )}
      </DialogContent>
      <DialogActions sx={{ pb: 3, px: 3 }}>
        <Button onClick={handleClose}>Huỷ</Button>
        <Button variant="contained" type="submit">
          Tiếp tục
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ForgotPassword.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ForgotPassword;
