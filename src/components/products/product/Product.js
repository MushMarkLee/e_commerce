import React, {useEffect, useState} from "react";
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button} from "@material-ui/core";
import {AddShoppingCart, ShoppingCart} from "@material-ui/icons";
import useStyles from './styles';
import {Link} from "react-router-dom";
import {commerce} from "../../../lib/commerce";

const Product = ({cart, product, onAddToCart}) => {
    const classes = useStyles()

    const [quantity, setQuantity] = useState(product.inventory.available);

    const handleAddToCart = () => {
        setQuantity(quantity - 1)
        onAddToCart(product.id, 1)
    }




    return(

        <Card className={classes.root}  >

            <CardMedia className={classes.media} image={product.image.url} title={product.name} />
            <CardContent>
                <div >
                    <Typography variant='h6' gutterBottom >
                        {product.name}
                    </Typography>
                    <Typography variant='h6'   >
                        {product.price.formatted_with_code}
                    </Typography>

                </div>


            </CardContent>


            {quantity > 0 ? <CardActions disableSpacing className={classes.cardActions}>
                <IconButton  aria-label='Add to Cart' onClick={handleAddToCart} >
                    <AddShoppingCart style={{ fontSize: 35 }}  />
                </IconButton>
            </CardActions> : <CardActions disableSpacing className={classes.cardActions}>
                <IconButton  aria-label='Add to Cart'  >
                    <AddShoppingCart style={{ fontSize: 35 }}  />
                </IconButton>
            </CardActions>
            }

            {console.log("Rebuild product component")}



            <Link to={`product-view/${product.id}`} className={classes.link}>
                <Typography className={classes.view}>
                    View details </Typography>
            </Link>
        </Card>
    )

}

export default Product