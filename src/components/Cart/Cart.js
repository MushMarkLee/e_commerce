import React, {useEffect, useState} from "react";
import {Container, Typography, Button, Grid, Card, CardMedia, CardContent, CardActions} from "@material-ui/core";
import useStyles from './styles';
import CartItem from "./CartItem/CartItem";
import {Link} from 'react-router-dom'
import {commerce} from "../../lib/commerce";

const Cart = ({ products, cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {
    const classes = useStyles()




    const renderEmptyCart = () => (
        <div className={classes.emptyCart}>
            <Typography variant="subtitle1" style={{fontFamily: 'Lato', fontSize: '20px'}}> You have no items in your shopping cart
                <Link to='/' className={classes.link}> start adding some  💖  </Link>
            </Typography>
        </div>

    );



    const renderFilledCart = () => (

        <React.Fragment>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
                    </Grid>
                ))}

            </Grid>
            <div className={classes.cardDetails} >
                <Typography variant='h6'>
                    Subtotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size='large' type='button' variant='contained'  style={{backgroundColor: '#b3abd6', color:'#fff'}} onClick={handleEmptyCart}> Empty Cart </Button>
                    <Button component={Link} to='/checkout' className={classes.checkoutButton} size='large' type='button' variant='contained' style={{backgroundColor: '#e4b0d2', color:'#fff'}}> Check out </Button>
                </div>

            </div>

        </React.Fragment>

    );

    if(!cart.line_items) return <p>Loading...</p>
    return (
        <Container className={classes.maincart}  >
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant='h4' gutterBottom>Your Shopping Cart</Typography><br/> <br/>

            { !cart.line_items.length ? renderEmptyCart() : renderFilledCart() }

        </Container>
    )
}

export default Cart