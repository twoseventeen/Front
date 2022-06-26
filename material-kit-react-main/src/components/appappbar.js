import { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AppBarBar } from '../components/appbarbar';

const AppAppBarRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    minWidth: '0%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        padding: 100
    }
}));


export const AppAppBar = (props) => {
    const { children } = props;
    const [isSidebarOpen, setSidebarOpen] = useState(true);



    return (
        <>
            <AppAppBarRoot>
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
            </AppAppBarRoot>
            < AppBarBar onSidebarOpen={() => setSidebarOpen(true)} />
        </>
    );
};