import React, {useState} from "react";
import  { AppBar, Toolbar, IconButton, Badge, Typography, Drawer, List, ListItem, ListItemText, SwipeableDrawer} from "@material-ui/core";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { ShoppingCart } from '@material-ui/icons';
import {Menu as MenuIcon} from '@material-ui/icons';
import {Close as CloseIcon} from '@material-ui/icons';
import logo from '../../assets/l.png';
import menu from '../../assets/menu.svg';

import useStyles from './styles';
import {Link, useLocation} from 'react-router-dom';
import Box from "@material-ui/core/Box";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { HashLink  } from 'react-router-hash-link';


import Scroll from "react-scroll";

const ScrollLink = Scroll.Link;

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const content_products = document.getElementById('content_products')

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(open);
    };


    const drawer = (
        <Drawer
            anchor="left"
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)} id='drawer' >
            <Box sx={{
                p: 2,
                width:'200px',
                height: '100vh',
                backgroundColor: "#EBCCD6"
            }}>
                <IconButton className='closebutton'>
                    <CloseIcon onClick={toggleDrawer(false)} style={{color: '#ffffff', width: '150%'}} />
                </IconButton>


                <Box >
                    <ListItem >
                        <ListItemText >
                            <Link to="/" className='nav_links' onClick={toggleDrawer(false)}>Home</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem >
                        <ListItemText >
                            <Link to="/about" className='nav_links' onClick={toggleDrawer(false)}>About us</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <Link to="/reviews" className='nav_links' onClick={toggleDrawer(false)}>Reviews</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <HashLink to="/#content_products" className='nav_links' onClick={toggleDrawer(false)}>
                                Products
                            </HashLink>
                        </ListItemText>
                    </ListItem>
                </Box>
            </Box>
        </Drawer>
    )

    return(
        <>
            <React.Fragment>
                <AppBar className={classes.appBar} style={{backgroundColor: '#EFD8DF'}}>
                    <Toolbar >
                        <IconButton onClick={toggleDrawer(true)}>
                            <MenuIcon  style={{ fontSize: 35, color: '#7f74b1'}}/>
                        </IconButton>
                        {drawer}


                        <div className={classes.grow}/>
                        <div className={classes.button}>
                            <IconButton component={Link} to='/cart' aria-label='Show cart items' color='inherit' className={classes.icon}>
                                <Badge badgeContent={totalItems} color='secondary' >
                                    <ShoppingCart style={{ fontSize: 35, color: '#7f74b1', marginLeft: '10px'}} />
                                </Badge>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>

                {location.pathname === '/' && (
                    <AppBar className={classes.appBar} style={{backgroundColor: '#e3e8fb'}}>
                        <Toolbar >
                            <IconButton onClick={toggleDrawer(true)}>
                                <MenuIcon  style={{ fontSize: 35, color: '#7f74b1'}}/>
                            </IconButton>
                             {drawer}


                            <div className={classes.grow}/>
                            <div className={classes.button}>
                                <IconButton component={Link} to='/cart' aria-label='Show cart items' color='inherit' className={classes.icon}>
                                    <Badge badgeContent={totalItems} color='secondary' >
                                        <ShoppingCart style={{ fontSize: 35, color: '#7f74b1', marginLeft: '10px'}} />
                                    </Badge>
                                </IconButton>
                            </div>
                        </Toolbar>
                    </AppBar>   )}

                {location.pathname === '/cart' &&(
                    <AppBar className={classes.appBar} style={{backgroundColor: '#fff'}}>
                        <Toolbar>
                            <IconButton onClick={toggleDrawer(true)}>
                                <MenuIcon sx={{ mr: 2 }} style={{ fontSize: 35, color: '#7f74b1'}}/>
                            </IconButton>
                            {drawer}

                        </Toolbar>
                    </AppBar>
                )}



            </React.Fragment>

        </>
    )
}


export default Navbar

