import React, {useState} from "react";
import { Grid, Button, Container, Typography} from "@material-ui/core";
import Product from "./product/Product";
import useStyles from './styles';
import {Link} from "react-router-dom";
import Loading from "../Loading/Loading";



const Products = ({cart, categories, onAddToCart}) => {

    const classes = useStyles()

    if (!categories.length) return <Loading/>;

    return(
        <main id='content_products'>
            <div className={classes.toolbar} />
            {categories.map((category) =>{
                return(
                    <Container >
                        <Typography>
                           <p className='category_name'> {category.name}</p>
                            {/*<img src={category.assets[0].url} style={{width: '200px'}}/>*/}
                            {/*<Link to={`/` + category.name} >*/}
                            {/*    <button > click </button>*/}

                            {/*</Link>*/}

                        </Typography>
                        <Grid container justify='center' spacing={4}>
                            {category.productsData.map((product)=> (
                                <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
                                    <Product cart={cart} product={product} onAddToCart={onAddToCart} />
                                </Grid>
                            ))}
                        </Grid>
                    </Container>

                )
            })}
        </main>


        // <main className={classes.content} id='content_products'>
        //     <div className={classes.toolbar} />
        //     <Grid container justify='center' spacing={4}>
        //         {products.map((product)=> (
        //             <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
        //                 <Product product={product} onAddToCart={onAddToCart} />
        //             </Grid>
        //         ))}
        //     </Grid>
        //
        // </main>
        )

}

export default Products