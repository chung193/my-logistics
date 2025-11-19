import MainLayout from '@layouts/mainLayout'
import PrivateRoute from "./privateRoute"
import Dashboard from '@pages/dashboard/index'
import PageCategory from '@pages/page-category'
import Page from '@pages/page'
import PostCategory from '@pages/post-category'
import Post from '@pages/post'
import ProductCategory from '@pages/product-category'
import Brand from '@pages/brand'
import Origin from '@pages/origin'
import Product from '@pages/product'
import Attribute from '@pages/attribute'
import User from '@pages/user'
import Order from '@pages/order'
import Showroom from '@pages/show-room'
import Customer from '@pages/customer'
import Payment from '@pages/payment'
import Slider from '@pages/slider'
import Banner from '@pages/banner'
import Warranty from '@pages/warranty'
import Promotion from '@pages/promotion'
import EmailSubscription from '@pages/email-subscription'

import Role from '@pages/role'
import Setting from '@pages/setting'
import Profile from '@pages/profile'
import ChangePassword from '@pages/change-password'

// ==============================|| MAIN ROUTING ||============================== //


const MainRoutes = {
  path: '/',
  element: <PrivateRoute element={<MainLayout />} />,  // Truyền vào element ở đây
  children: [
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/email-subscription',
      element: <EmailSubscription />
    },

    {
      path: '/banner',
      element: <Banner />
    },
    {
      path: '/promotion',
      element: <Promotion />
    },
    {
      path: '/warranty',
      element: <Warranty />
    },
    {
      path: '/slider',
      element: <Slider />
    },
    {
      path: '/payment',
      element: <Payment />
    },
    {
      path: '/profile',
      element: <Profile />
    },
    {
      path: '/customer',
      element: <Customer />
    },
    {
      path: '/show-room',
      element: <Showroom />
    },
    {
      path: '/order',
      element: <Order />
    },
    {
      path: '/change-password',
      element: <ChangePassword />
    },
    {
      path: '/setting',
      element: <Setting />
    },
    {
      path: '/page-category',
      element: <PageCategory />
    },
    {
      path: '/page',
      element: <Page />
    },
    {
      path: '/post-category',
      element: <PostCategory />
    },

    {
      path: '/post',
      element: <Post />
    },
    {
      path: '/product-category',
      element: <ProductCategory />
    },
    {
      path: '/brand',
      element: <Brand />
    },
    {
      path: '/origin',
      element: <Origin />
    },
    {
      path: '/product',
      element: <Product />
    },
    {
      path: '/attribute',
      element: <Attribute />
    },
    {
      path: '/user',
      element: <User />
    },
    {
      path: '/role',
      element: <Role />
    },
  ]
}

export default MainRoutes
