import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {Badge, IconButton, Toolbar} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";
import Button from "@material-ui/core/Button";



const MyButton = () => {

    const location = useLocation()


    if (location.pathname === '/') {
        return(

            <a href="#content_products" >
                <Button id='my_button'>
                    Check our products
                </Button>
            </a>

        )
    } else if (location.pathname === '/cart'){
        return(
            <Button className='my_button' component={Link} to='/' id='my_button2'>
                Back
            </Button>
        )
    }
}
export default MyButton