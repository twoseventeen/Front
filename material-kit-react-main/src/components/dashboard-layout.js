import { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DashboardAppbar } from './dashboardAppbar';


const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  minWidth: '0%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    padding: 100
  }
}));

export const DashboardLayout = (props) => {
  const { children } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(true);



  return (
    <>
      {/* <DashboardLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%'

          }}
        >
          {children}
        </Box>

      </DashboardLayoutRoot> */}
      <DashboardAppbar anchorEl={() => setSidebarOpen(true)} />

      {children}

      {/* <DashboardSidebar
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      /> */}
    </>

  );

};
