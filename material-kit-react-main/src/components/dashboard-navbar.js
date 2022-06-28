import PropTypes from 'prop-types';
import * as React from 'react';
import styled from '@emotion/styled';
import NextLink from 'next/link';
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


const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({

  backgroundColor: 'white',
  // theme.palette.background.paper
  boxShadow: theme.shadows[5],
  height: 80,
  width: '100%'
}));

export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;


  return (
    <>
      <React.Fragment>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
        <CssBaseline />
        <DashboardNavbarRoot
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

            {/* <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            <MenuIcon fontSize="Large" />
          </IconButton> */}

            {/* 

            <Typography variant="h4" color="secondary" noWrap
              sx={{
                flexGrow: 1,
                mx: 3,
                mr: 3
              }}>
              Lawbot
            </Typography> */}
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



            <nav>
              <Link
                variant="button"
                color="text.primary"
                href="#"
                underline="none"
                sx={{ my: 1, mx: 1.5 }}
              >커뮤니티

              </Link>
              <Link
                variant="button"
                color="text.primary"
                href="#"
                underline="none"
                sx={{ my: 1, mx: 1.5 }}
              >
                실태조사
              </Link>
              <Link
                variant="button"
                color="text.primary"
                href="/card"
                underline="none"
                sx={{ my: 1, mx: 1.5 }}
              >
                카드뉴스
              </Link>
            </nav>
            <Button href="/login" color="secondary" sx={{ my: 1, mx: 1.5 }}>로그인</Button>
            <Button href="/register" color="secondary" variant="contained" sx={{ my: 1, mx: 0 }}>
              회원가입</Button>



            {/* <Tooltip title="Search">
            <IconButton sx={{ ml: 1, mt: 2 }}>
              <SearchIcon fontSize="Large" />
            </IconButton>
          </Tooltip> */}




            {/* <Box sx={{ flexGrow: 1 }} />
          <Tooltip title="Contacts">
            <IconButton sx={{
              ml: 1,
              mt: 2
            }}>
              <UsersIcon fontSize="Large" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Notifications">
            <IconButton sx={{
              ml: 1,
              mt: 2
            }}>
              <Badge
                badgeContent={4}
                color="primary"
                variant="dot"
              >
                <BellIcon fontSize="Large" />
              </Badge>
            </IconButton>
          </Tooltip>
          <Avatar
            sx={{
              height: 40,
              width: 40,
              ml: 1,
              mt: 2
            }}
            src="/static/images/avatars/avatar_1.png"
          >
            <UserCircleIcon fontSize="Large" />
          </Avatar> */}

          </Toolbar>
        </DashboardNavbarRoot>
      </React.Fragment>

    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func
};
