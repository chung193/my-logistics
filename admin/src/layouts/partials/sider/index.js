

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SelectContent from '@dashboard/components/SelectContent';
import OptionsMenu from './userMenu';
import MainMenu from './menu'
import apiService from '../../../services/common';
import IndexLogo from '../header/partials/indexLogo';


const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
    width: drawerWidth,
    flexShrink: 0,
    boxSizing: 'border-box',
    mt: 10,
    [`& .${drawerClasses.paper}`]: {
        width: drawerWidth,
        boxSizing: 'border-box',
    },
});

export default function Sider() {
    const [userData, setUserData] = React.useState(null)
    React.useEffect(() => {
        apiService.profile()
            .then(res => {
                setUserData(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <Drawer
            variant="permanent"
            sx={{
                display: { xs: 'none', md: 'block' },
                [`& .${drawerClasses.paper}`]: {
                    backgroundColor: 'background.paper',
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    mt: 'calc(var(--template-frame-height, 0px) + 4px)',
                    p: 1.5,
                }}
            >
                <IndexLogo />
            </Box>
            <Divider />
            <Box
                sx={{
                    overflow: 'auto',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <MainMenu />
            </Box>
            <Stack
                direction="row"
                sx={{
                    p: 2,
                    gap: 1,
                    alignItems: 'center',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                {userData &&
                    <>
                        <Avatar
                            sizes="small"
                            alt={userData.name}
                            src="/avatar.webp"
                            sx={{ width: 36, height: 36 }}
                        />
                        <Box sx={{ mr: 'auto' }}>
                            <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: '16px' }}>
                                {userData.name}
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                {userData.email}
                            </Typography>
                        </Box>
                        <OptionsMenu />
                    </>}
            </Stack>
        </Drawer>
    );
}

