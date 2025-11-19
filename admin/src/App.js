import './App.css';
import router from './routers';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from "@providers/authProvider"
import GlobalProvider from '@providers/globalProvider'

function App() {
  return (
    <GlobalProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </GlobalProvider>
  );
}

export default App;
