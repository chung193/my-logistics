import { createBrowserRouter } from 'react-router-dom';

// project import
import MainRoutes from './mainRoutes';
import LoginRoutes from './loginRoutes';

// ==============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter([MainRoutes, LoginRoutes], { basename: process.env.REACT_APP_BASE_NAME });

export default router;
