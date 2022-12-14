import React, {useState, useEffect} from "react";
import { commerce } from "./lib/commerce";
import {Products, Navbar, Cart, Checkout, Screen, Review, About, ProductView} from "./components";
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import './app.css';
import './app.scss';

const App = () => {
    const [categories, setCategories] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('')
    const [seller, setSeller] = useState('')

    const fetchSeller = async () => {
        const {data} = await commerce.merchants.about()
        const name = data[0].name
        setSeller(name);
    }

    const fetchProducts = async () => {
        const {data: products} = await commerce.products.list({limit: 200});
        const { data: categoriesData } = await commerce.categories.list();

        const productsPerCategory = categoriesData.reduce((acc, category)=> {
            return[
                ...acc,
                {
                    ...category,
                    productsData: products.filter((product)=>product.categories.find((cat)=>cat.id ===category.id)
                    ),
                },
           ];
        },[])

        setCategories(productsPerCategory);

    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    };

    const handleAddToCart = async (productId, quantity) => {
        const cart = await commerce.cart.add(productId, quantity);
        setCart(cart)
    }

    const handleUpdateCartQty = async (lineItemId, quantity) => {
        const cart = await commerce.cart.update(lineItemId, { quantity });
        setCart(cart);

    };

    const handleRemoveFromCart = async (productId) =>{
        const cart = await commerce.cart.remove(productId)
        setCart(cart)

    }

    const handleEmptyCart = async () => {
        const cart = await commerce.cart.empty();
        setCart(cart);

    };

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
        setCart(newCart);

    };
    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
            setOrder(incomingOrder);
            refreshCart();
        } catch(error){
            setErrorMessage(error.data.error.message)
        }
    }


    useEffect(() => {
        fetchProducts();
        fetchCart();
        fetchSeller()

    }, []);


    return (
            <React.Fragment>
                <Router>
                    <Screen seller={seller}/>
                    <Navbar totalItems={cart.total_items}/>
                    <Routes>
                        <Route exact path='/' element={<Products cart={cart} categories={categories} onAddToCart ={handleAddToCart} handleUpdateCartQty/>} />
                        <Route path='/reviews' element={<Review />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/cart' element={<Cart cart={cart}
                                                           handleUpdateCartQty={handleUpdateCartQty}
                                                           handleRemoveFromCart={handleRemoveFromCart}
                                                           handleEmptyCart={handleEmptyCart}/>}  />
                        <Route exact path='/checkout' element={<Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage}/>}/>
                        <Route exact path='/product-view/:id' element={<ProductView />} />
                    </Routes>
                </Router>
            </React.Fragment>
    );
}

export default App;
