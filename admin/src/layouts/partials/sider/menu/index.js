import * as React from 'react';
import List from '@mui/material/List';
import { Divider } from '@mui/material';
import { ListItem, Collapse } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import menusData from './menuData'

export default function MenuContent() {
    const navigate = useNavigate();
    const [openMenu, setOpenMenu] = React.useState({});

    const handleToggle = (label) => {
        setOpenMenu(prev => ({ ...prev, [label]: !prev[label] }));
    };

    const onClickItem = (url) => {
        if (url) navigate(`/${url}`);
    };

    const renderMenu = (menus) => (
        menus.map((item, index) => (
            item.children ? (
                <>
                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton onClick={() => handleToggle(item.label)} disablePadding >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.label} />
                            {openMenu[item.label] ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openMenu[item.label]} timeout="auto" unmountOnExit>
                            <List component="div" >
                                {item.children.map(sub => (
                                    <ListItemButton
                                        key={sub.key}
                                        sx={{ pl: 4 }}
                                        onClick={() => onClickItem(sub.url)}
                                    >
                                        <ListItemIcon>{sub.icon}</ListItemIcon>
                                        <ListItemText primary={sub.label} />
                                    </ListItemButton>
                                ))}
                            </List>
                        </Collapse>
                    </ListItem>
                    <Divider />
                </>
            ) : (
                <>
                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton key={item.key} onClick={() => onClickItem(item.url)} disablePadding >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                </>
            )
        ))
    );

    return (
        <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
            <List dense>
                {renderMenu(menusData)}
            </List>
        </Stack>
    );
}

