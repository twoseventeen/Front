import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { DamageRate } from 'src/components/chart/damage-rate';
import { DamageType } from 'src/components/chart/damage-type';
import { Test1 } from 'src/components/chart/test1';
import React from 'react';


const Chart = () => (
    <>
        <Head>
            <title>
                Chart | Material Kit
            </title>
        </Head>
        <Typography
            sx={{
                mt: 1,
                mb: 2
            }}
            variant="h5"
        >
            학교폭력 피해 경험 현황
        </Typography>


        <Container
        >
            < DamageRate />
            <DamageType />
            <Test1 />

            {/* <Grid

            >

                <Grid
                    item
                    lg={6}
                    md={12}
                    xl={9}
                    xs={12}

                >
                    < DamageRate />

                </Grid>

                <Grid
                    item
                    lg={6}
                    md={6}
                    xl={3}
                    xs={12}
                >
                    <DamageType />
                </Grid>

            </Grid> */}
        </Container>
    </>
);



Chart.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);
export default Chart;