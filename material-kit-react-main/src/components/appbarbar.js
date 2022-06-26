import PropTypes from 'prop-types';
import * as React from 'react';
import NextLink from 'next/link';
import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Bell as BellIcon } from '../icons/bell';
import { UserCircle as UserCircleIcon } from '../icons/user-circle';
import { Users as UsersIcon } from '../icons/users';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Hidden from '@mui/material/Hidden';


const AppBarBarRoot = styled(AppBar)(({ theme }) => ({

  backgroundColor: 'white',
  boxShadow: theme.shadows[5],
  height: 80,
  width: '100%'
}));

export const AppBarBar = (props) => {
  const { onSidebarOpen, ...other } = props;

  return (
    <>
      <React.Fragment>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
        <CssBaseline />
        <AppBarBarRoot
          sx={{
            flex: '1 1 auto',
            hight: 80,

            borderBottom: (theme) => `1px solid ${theme.palette.divider}`
          }}
          {...other}>

          <Toolbar
            //  disableGutters
            sx={{
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'hidden'
            }}
          >
            <NextLink
              href="/"
            >
              <Link
                variant="h4"
                to="/"
                color="secondary"
                noWrap
                underline="hover"
                sx={{
                  cursor: 'pointer',
                  flexGrow: 1,
                  mx: 3,
                  mr: 3
                }}
              >
                Lowbot
              </Link>
            </NextLink>
          </Toolbar>
        </ AppBarBarRoot>
      </React.Fragment>
    </>
  );
};


