import {
    Typography,
    Box,
    Link
} from '@mui/material'

const IndexLogo = () => {
    const styleLogo = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }

    const styleName = {
        margin: '0px 0 0 5px',
        fontWeight: 'bold'
    }

    const styleVersion = {
        fontSize: '10px',
        margin: '5px 0 0 2px',
        color: '#bdc3c7'
    }
    return (
        <Box style={styleLogo}>
            <Link href='/' sx={{
                textDecoration: 'none', '&:before': {
                    display: 'none'
                }
            }}>
                <img src='logo.png' alt="site logo" width="45" height='45' />
            </Link>
            <Typography style={styleName}>TechZone</Typography><Typography style={styleVersion}>{process.env.REACT_APP_VERSION}</Typography>
        </Box>)
}

export default IndexLogo