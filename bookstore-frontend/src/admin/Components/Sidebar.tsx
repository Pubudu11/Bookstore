import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ThemeProvider,
    ListItemIcon,
    ListItemText,
    Toolbar,
    createTheme,
    CssBaseline,
    AppBar,
    IconButton,
    Typography,
    Badge,
    Avatar,
    Menu,
    MenuItem,
} from '@mui/material';
import {
    Book as BookIcon,
    Dashboard as DashboardIcon,
    Menu as MenuIcon,
    Notifications as NotificationsIcon,
    People as PeopleIcon,
    Settings as SettingsIcon,
    ShoppingCart as ShoppingCartIcon,
    AdminPanelSettings as AdminPanelSettingsIcon,
    LocalShipping as LocalShippingIcon
} from '@mui/icons-material';

function Sidebar() {
    // Theme based on Sarasavi bookstore colors
    const sarasaviTheme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#2B4899', // Dark blue from the header
                light: '#4267B2', // Lighter blue for hover states
            },
            secondary: {
                main: '#FF6B00', // Orange from the website
            },
            background: {
                default: '#ffffff',
                paper: '#ffffff',
            },
            text: {
                primary: '#2B4899',
                secondary: '#666666',
            },
        },
        typography: {
            fontFamily: '"Segoe UI", "Helvetica", "Arial", sans-serif',
        },
    });

    const navigate = useNavigate();
    const drawerWidth = 240;
    const [open, setOpen] = useState(true);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleNavigation = (route: string) => {
        navigate("/admin/" + route);
    };

    return (
        <ThemeProvider theme={sarasaviTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                        backgroundColor: '#2B4899',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            edge="start"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{
                                flexGrow: 1,
                                fontWeight: 600
                            }}
                        >
                            📚 Bookstore Admin
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton onClick={handleMenu} color="inherit">
                            <Avatar sx={{
                                width: 32,
                                height: 32,
                                ml: 1,
                                bgcolor: '#FF6B00'
                            }}>S</Avatar>
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>Settings</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>

                <Drawer
                    variant="permanent"
                    open={open}
                    sx={{
                        width: open ? drawerWidth : 64,
                        '& .MuiDrawer-paper': {
                            width: open ? drawerWidth : 64,
                            overflowX: 'hidden',
                            transition: 'width 0.2s',
                            borderRight: '1px solid #e0e0e0',
                        },
                    }}
                >
                    <Toolbar />
                    <Box sx={{ overflow: 'hidden' }}>
                        <List>
                            {[
                                // { text: 'Dashboard', icon: <DashboardIcon />, route: 'admin/dashboard' },
                                { text: 'Books', icon: <BookIcon />, route: 'books' },
                                { text: 'Users', icon: <PeopleIcon />, route: 'users' },
                                { text: 'Admins', icon: <AdminPanelSettingsIcon />, route: 'admins' },
                                { text: 'Orders', icon: <ShoppingCartIcon />, route: 'orders' },
                            ].map(({ text, icon, route }) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton
                                        onClick={() => handleNavigation(route)}
                                        sx={{
                                            my: 0.5,
                                            mx: 1,
                                            borderRadius: 1,
                                            bgcolor: location.pathname === route ? 'rgba(43, 72, 153, 0.08)' : 'transparent',
                                            '&:hover': {
                                                bgcolor: 'rgba(43, 72, 153, 0.12)',
                                            },
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                color: location.pathname === route ? 'primary.main' : 'text.secondary',
                                                minWidth: 40,
                                            }}
                                        >
                                            {icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={text}
                                            sx={{
                                                '& .MuiListItemText-primary': {
                                                    color: location.pathname === route ? 'primary.main' : 'text.secondary',
                                                    fontWeight: location.pathname === route ? 600 : 400,
                                                }
                                            }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </Box>
        </ThemeProvider>
    );
}

export default Sidebar;