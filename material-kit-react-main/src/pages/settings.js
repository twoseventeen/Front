import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { SettingsPassword } from '../components/settings/settings-password';
import { AppAppBar } from '../components/appappbar';




const Settings = () => (
  <>
    <Head>
      <title>
        Settings | Material Kit
      </title>
    </Head>

    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 4
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h5" gutterBottom marked="center" align="left">
          비밀번호 재설정
        </Typography>
        <Typography variant="body3" align="left">
          {"비밀번호를 변경해 주세요."}
        </Typography>
      </Container>
      <Container maxWidth="sm">

        <SettingsPassword />


      </Container>
    </Box>
  </>
);

Settings.getLayout = (page) => (
  <AppAppBar>
    {page}
  </AppAppBar>
);

export default Settings;