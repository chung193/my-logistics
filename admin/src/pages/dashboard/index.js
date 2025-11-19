import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Copyright from '@dashboard/internals/components/Copyright';
import ChartUserByCountry from '@dashboard/components/ChartUserByCountry';
import CustomizedDataGrid from '@dashboard/components/CustomizedDataGrid';
import PageViewsBarChart from '@dashboard/components/PageViewsBarChart';
import SessionsChart from '@dashboard/components/SessionsChart';
import StatCard, { StatCardProps } from '@dashboard/components/StatCard';
import apiService from '@services/common'
import { useGlobalContext } from '@providers/globalProvider';
import { formatCurrency } from '@utils/common'

export default function Dashboard() {
    const [statics, setStatics] = React.useState(null)
    const [data, setData] = React.useState([])

    function convertResponse(response) {
        const daily = response.daily || [];
        const totalSum = daily.reduce((acc, item) => acc + (item.revenue.total ?? 0), 0);
        const value = formatCurrency(Math.round(totalSum));
        const data = daily.map(item => formatCurrency(item.revenue.total) ?? 0);

        return {
            title: 'Doanh thu',
            value,
            interval: 'Trong tháng này',
            data
        };
    }

    React.useEffect(() => {
        apiService.get(`statics`)
            .then(res => {
                setStatics(res.data.data)
                setData(prevData => [
                    ...prevData,
                    convertResponse(res.data.data),
                ]);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
            {/* cards */}
            <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                Overview
            </Typography>
            <Grid
                container
                spacing={2}
                columns={12}
                sx={{ mb: (theme) => theme.spacing(2) }}
            >
                {data && data.length > 0 && data.map((card, index) => (
                    <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
                        <StatCard {...card} />
                    </Grid>
                ))}
                {/* <Grid size={{ xs: 12, md: 6 }}>
                    <SessionsChart />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <PageViewsBarChart />
                </Grid> */}
            </Grid>
            {/* <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                Details
            </Typography>
            <Grid container spacing={2} columns={12}>
                <Grid size={{ xs: 12, lg: 9 }}>
                    <CustomizedDataGrid />
                </Grid>
                <Grid size={{ xs: 12, lg: 3 }}>
                    <Stack gap={2} direction={{ xs: 'column', sm: 'row', lg: 'column' }}>
                        <ChartUserByCountry />
                    </Stack>
                </Grid>
            </Grid>
            <Copyright sx={{ my: 4 }} /> */}
        </Box>
    );
}
