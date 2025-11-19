import React, { createContext, useState, useContext } from "react";
import {
    Drawer,
    Modal,
    CircularProgress,
    Backdrop,
    Snackbar,
    Alert,
    Box,
    Typography,
    Button,
    Stack
} from '@mui/material'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const GlobalContext = createContext();

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

const GlobalProvider = ({ children }) => {
    const [notification, setNotification] = useState({
        open: false,
        message: '',
        severity: 'info',
    });

    const showNotification = (message, severity = "info") => {
        setNotification({ open: true, message, severity });
    };

    const handleCloseNotification = () => {
        setNotification(prev => ({ ...prev, open: false }));
    };

    const [loading, setLoading] = useState(false);

    const [confirm, setConfirm] = useState({
        open: false,
        title: '',
        content: '',
        onConfirm: () => { },
        onCancel: () => { }
    })
    const showConfirm = ({ title, content, onConfirm, onCancel }) => {
        setConfirm({ open: true, title, content, onConfirm, onCancel });
    };
    const closeConfirm = () => {
        setConfirm({ open: false, title: '', content: '', onConfirm: () => { }, onCancel: () => { } });
    };
    // modal
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});

    // Drawer
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [drawerContent, setDrawerContent] = useState(null);
    const [drawerCloseCallback, setDrawerCloseCallback] = useState(null);

    const showLoading = () => setLoading(true);
    const hideLoading = () => setLoading(false);

    const openModal = (content) => {
        setModalContent(content);
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalContent(null);
        setModalOpen(false);
    };

    const openDrawer = ({ content, onCloseCallback = null }) => {
        setDrawerContent(content);
        setDrawerOpen(true);
        setDrawerCloseCallback(() => onCloseCallback);
    };

    const closeDrawer = () => {
        setDrawerContent(null);
        setDrawerOpen(false);
        if (drawerCloseCallback) drawerCloseCallback();
    };

    return (
        <GlobalContext.Provider
            value={{
                showNotification,
                showLoading,
                hideLoading,
                openModal,
                closeModal,
                openDrawer,
                closeDrawer,
                showConfirm,
                closeConfirm
            }}
        >
            {children}

            {/* Loader */}
            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            {/* Modal */}
            <Modal
                open={modalOpen}
                keepMounted
                onClose={() => closeModal()}
            >

                <Box sx={style}>
                    {typeof modalContent === 'string' ? modalContent : React.isValidElement(modalContent) ? modalContent : JSON.stringify(modalContent)}
                </Box>

            </Modal>

            <Modal
                open={confirm.open}
                keepMounted
                onClose={() => closeConfirm()}
            >

                <Box sx={style}>
                    <Stack direction={'column'} spacing={2} sx={{ mb: 2 }}>
                        <Typography id="spring-modal-title" variant="h6" component="h2">
                            {confirm.title}
                        </Typography>
                        <Typography id="spring-modal-description" sx={{ mt: 2 }}>
                            {confirm.content}
                        </Typography>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                        <Button
                            onClick={confirm.onConfirm}
                            color='error'
                            variant="contained"
                        >
                            Đồng ý
                        </Button>
                        <Button
                            variant="contained"
                            onClick={confirm.onCancel}
                        >
                            Hủy
                        </Button>
                    </Stack>
                </Box>

            </Modal>

            <Drawer
                anchor='right'
                open={drawerOpen}
                onClose={() => {
                    drawerCloseCallback()
                    closeDrawer()
                }}
            >
                <Box sx={{ p: 2 }}>{drawerContent}</Box>
            </Drawer>


            <Snackbar
                open={notification.open}
                autoHideDuration={3000}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                onClose={() => {
                    handleCloseNotification()
                }}>
                <Alert
                    severity={notification.severity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {notification.message}
                </Alert>
            </Snackbar>
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
