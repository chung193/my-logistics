
import AuthLayout from '@layouts/authLayout';
import Login from '@pages/authentication/login'
import ResetPassword from '@pages/authentication/reset-password'

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  element: <AuthLayout />,
  children: [
    {
      path: 'login',
      element: <Login />
    },
    {
      path: '/reset-password',
      element: <ResetPassword />
    },
  ]
};

export default LoginRoutes;
