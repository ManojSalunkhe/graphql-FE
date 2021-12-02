import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    AppBar,
    Toolbar,
    Menu,
    MenuItem,
    IconButton,
    Tabs,
    Tab
} from '@material-ui/core'
import MoreIcon from '@material-ui/icons/MoreVert'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1
    },

    appBar: {
        backgroundColor: theme.palette.primary.light
    },

    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
}));



function NavigationBar(props) {

    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null)
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)


    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
        props.history.push("/profile")
        // localStorage.clear()
    }

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    }


    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>My Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Log out</MenuItem>
        </Menu>
    )


    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMonlieMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <p>Blog</p>
            </MenuItem>
            <MenuItem>
                <p> Create Blog</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <p>Profile</p>
            </MenuItem>
        </Menu >
    )

    return (
        <div className={classes.grow}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Tabs value={0}
                            TabIndicatorProps={{
                                style: {
                                    display: "none",
                                },
                            }}
                        >
                            <Tab label="Blog" component={Link} to="/blog" ></Tab>
                            <Tab label="Create Blog" component={Link} to="/post-blog"></Tab>
                            <Tab label="Profile" onClick={handleProfileMenuOpen} ></Tab>
                        </Tabs>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMonlieMenu}
            {renderMenu}
        </div >
    )
}

export default withRouter(NavigationBar)
