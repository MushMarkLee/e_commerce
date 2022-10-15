import useStyles from './styles';
import { commerce } from "../../lib/commerce";
import React, {useState, useEffect} from "react";
import {CardMedia, Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const ProductView = () => {
    const classes = useStyles()
    const [product, setProduct] = useState({})

    const fetchProduct = async (id) => {
        const response = await  commerce.products.retrieve(id);
        const {name, price, image, quantity, description, inventory} = response;
        setProduct(
            {
                id,
                name,
                description,
                image: image.url,
                quantity: inventory.available,
                price: price.formatted_with_symbol
             }
        )


    };

    useEffect(()=> {
        const id = window.location.pathname.split("/");
        fetchProduct(id[2]);
    },[]);

    return(
        <div className={classes.div}>
            <Container className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} className='image-wrapper'>
                        <img src={product.image} alt={product.name} className={classes.image} />
                    </Grid>

                    <Grid item xs={12} md={4} className='text'>
                        <Typography variant='h6' className={classes.name}> {product.name} </Typography>

                        <Typography variant='h6'> Price: {product.price} </Typography>

                        <Typography dangerouslySetInnerHTML={{__html: product.description}} variant='h6' color='textSecondary'  />

                        <Typography variant='h6'>Available:  {product.quantity} </Typography>
                    </Grid>


                </Grid>



            </Container>
        </div>


    )
}

export default ProductView