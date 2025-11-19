import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Breadcrumbs, { breadcrumbsClasses } from '@mui/material/Breadcrumbs';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { Link } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
    margin: theme.spacing(1, 0),
    [`& .${breadcrumbsClasses.separator}`]: {
        color: (theme.vars || theme).palette.action.disabled,
        margin: 1,
    },
    [`& .${breadcrumbsClasses.ol}`]: {
        alignItems: 'center',
    },
}));

export default function NavbarBreadcrumbs() {
    const path = useSelector((state) =>
        state.common.data.breadcrumb
    )

    return (
        <StyledBreadcrumbs
            aria-label="breadcrumb"
            separator={<NavigateNextRoundedIcon fontSize="small" />}
        >
            <Typography variant="body1">Trang chủ</Typography>
            {path.length > 0 && path.map((item, index) => {
                const isLast = index === path.length - 1;
                if (isLast) {
                    return (
                        <Typography
                            key={index}
                            variant="body1"
                            sx={{ color: 'text.primary', fontWeight: 600 }}
                        >
                            {item.name}
                        </Typography>
                    );
                } else {
                    return (
                        <Link
                            key={index}
                            underline="hover"
                            color="inherit"
                            href={item.url}
                            sx={{ fontWeight: 600 }}
                        >
                            {item.name}
                        </Link>
                    );
                }
            })}
        </StyledBreadcrumbs>
    );
}

