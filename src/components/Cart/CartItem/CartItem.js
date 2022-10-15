import React, {useEffect, useState} from "react";
import { Typography, Button, Card, CardContent, CardMedia, CardActions} from "@material-ui/core";
import useStyles from './styles';
import {commerce} from "../../../lib/commerce";

const CartItem = ({item, onUpdateCartQty, onRemoveFromCart}) => {
    const classes = useStyles()

    const [product, setProduct] = useState({})

    const fetchProduct = async (id) => {
        const response = await  commerce.products.retrieve(id);
        const {name, price, image, quantity, description, inventory} = response;
        setProduct(
            {
                id,
                name,
                quantity: inventory.available,
            }
        )


    };
    useEffect(()=> {
        fetchProduct(item.product_id);
    },[]);


    const buttons = (product, cart) => {
        if (product>cart) {
            return(
                <Button type='button' size='small' onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
            )
        }
        else{
            return (
                <p></p>
            )
        }
    }

    return(
        <Card>
            <CardMedia image={item.image.url} className={classes.media} alt={item.name} />
            <CardContent className={classes.cardContent}>
                <Typography variant='h6'>{item.name} </Typography>
                <Typography variant='h6'> {item.line_total.formatted_with_code}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>

                    <Button type='button' size='small' onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                    <Typography> {item.quantity} </Typography>


                    {buttons(product.quantity, item.quantity )}

                </div>
                <Button variant='contained' type='button' style={{backgroundColor: '#dd5898', color:'#fff', marginLeft: '100px'}}  onClick={()=>onRemoveFromCart(item.id)}> Remove</Button>
            </CardActions>



        </Card>
    )
}

export default CartItem



