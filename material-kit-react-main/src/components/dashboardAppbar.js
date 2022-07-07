import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import { createTheme } from '@mui/material/styles';



const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    // alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 100,
    },
}));


const Search = styled('div')(({ theme }) => ({
    borderstyle: 'solid',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    position: 'relative',

    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
// const style = {
//     background: '#f8bbd0'
// };

const colorTool = createTheme({
    palette: {
        primary: {
            main: '#5048E5',
            light: '#828DF8',
            dark: '#3832A0',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#5a8100',

        },
    }
});

export const DashboardAppbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav('');
    };



    // const menuId = 'primary-search-account-menu';
    // const renderMenu = (
    //     <Menu
    //         anchorEl={anchorEl}
    //         anchorOrigin={{
    //             vertical: 'top',
    //             horizontal: 'right',
    //         }}
    //         id={menuId}
    //         keepMounted
    //         transformOrigin={{
    //             vertical: 'top',
    //             horizontal: 'right',
    //         }}
    //         open={isMenuOpen}
    //         onClose={handleMenuClose}
    //     >
    //         <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    //         <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    //     </Menu>
    // );

    // const mobileMenuId = 'primary-search-account-menu-mobile';
    // const renderMobileMenu = (
    //     <Menu
    //         anchorEl={mobileMoreAnchorEl}
    //         anchorOrigin={{
    //             vertical: 'top',
    //             horizontal: 'right',
    //         }}
    //         id={mobileMenuId}
    //         keepMounted
    //         transformOrigin={{
    //             vertical: 'top',
    //             horizontal: 'right',
    //         }}
    //         open={isMobileMenuOpen}
    //         onClose={handleMobileMenuClose}
    //     >
    //         <MenuItem>
    //             <IconButton size="large" aria-label="show 4 new mails" color="inherit">
    //                 <Badge badgeContent={4} color="error">
    //                     <MailIcon />
    //                 </Badge>
    //             </IconButton>
    //             <p>Messages</p>
    //         </MenuItem>
    //         <MenuItem>
    //             <IconButton
    //                 size="large"
    //                 aria-label="show 17 new notifications"
    //                 color="inherit"
    //             >
    //                 <Badge badgeContent={17} color="error">
    //                     <NotificationsIcon />
    //                 </Badge>
    //             </IconButton>
    //             <p>Notifications</p>
    //         </MenuItem>
    //         <MenuItem onClick={handleProfileMenuOpen}>
    //             <IconButton
    //                 size="large"
    //                 aria-label="account of current user"
    //                 aria-controls="primary-search-account-menu"
    //                 aria-haspopup="true"
    //                 color="inherit"
    //             >
    //                 <AccountCircle />
    //             </IconButton>
    //             <p>Profile</p>
    //         </MenuItem>
    //     </Menu>
    // );

    return (

        <Box sx={{
            flexGrow: 1,
            // bgcolor: 'primary.c1'
        }}>
            <AppBar position="static" color='secondary' >
                <StyledToolbar
                >
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    {/* <Typography
                            color='inherit'
                            variant="h4"
                            underline="hover"
                            noWrap
                            component="div"
                            href="/"
                            sx={{
                                display: { xs: 'none', sm: 'block' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                textDecoration: 'none',
                                cursor: 'pointer',
                                flexGrow: 1,

                            }}
                        >
                            Lawbot
                            
                        </Typography> */}

                    <NextLink
                        href="/"
                    >
                        <Link
                            variant="h4"
                            to="/"
                            color="primary"
                            noWrap
                            underline="hover"
                            sx={{
                                cursor: 'pointer',
                                flexGrow: 1,
                                mx: 3,
                                mr: 3
                            }}
                        >
                            Lawbot
                        </Link>
                    </NextLink>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <nav>
                            <Link
                                variant="h6"
                                color='inherit'
                                // color="text.primary"
                                href="#"
                                underline="none"
                                sx={{ my: 1, mx: 4 }}
                            >법령사전

                            </Link>
                            <Link
                                variant="h6"
                                color='inherit'
                                href="#"
                                underline="none"
                                sx={{ my: 1, mx: 4 }}
                            >
                                카드뉴스
                            </Link>
                            <Link
                                variant="h6"
                                color='inherit'
                                href="/wordcloud"
                                underline="none"
                                sx={{ my: 1, mx: 3 }}
                            >
                                법령 클라우드
                            </Link>

                            <Link
                                variant="h6"
                                color='inherit'
                                href="/chart"
                                underline="none"
                                sx={{ mx: 6, mt: 9 }}
                            >실태조사
                            </Link>
                            <Button href="/login" color='inherit' >로그인</Button>
                            <Button href="/register" variant="contained" color='primary' >회원가입</Button>

                            {/* 
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box> */}


                        </nav>
                    </Box>

                </StyledToolbar>
            </AppBar>
        </Box >

        // {/* {renderMobileMenu}
        // {renderMenu} */}
    );
};
DashboardAppbar.propTypes = {
    anchorEl: PropTypes.func
};