import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Review from './Review'

const stipePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

const PaymentForm = ({checkoutToken,shippingData, nextStep, backStep,  onCaptureCheckout, timeout}) => {

    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault();
        if(!stripe || !elements) return;

        console.log(shippingData)

        const cardElement =elements.getElement(CardElement);


        const {error, paymentMethod} = await stripe.createPaymentMethod({type: 'card', card: cardElement});
        if(error) {
            console.log(error)
        } else {
            const orderData = {
                line_items: checkoutToken.line_items,
                customer: {firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email},
                shipping: {
                    name: 'Primary',
                    street: shippingData.address1,
                    town_city: shippingData.city,
                    subdivision: shippingData.shippingSubdivision,
                    postal_zip_code: shippingData.zip,
                    country: shippingData.shippingCountry
                },
                fulfillment: {
                    shipping_method: shippingData.shippingOption.id,
                },
                payment: {
                    gateway: 'gway_4oG3G0DGPyvPo6',
                    stripe: {
                        payment_method_id: paymentMethod.id

                    }
                }
            };

            onCaptureCheckout(checkoutToken.id, orderData);
            console.log(orderData)
            nextStep()
        }

    }

    const total = checkoutToken.subtotal.raw
    console.log(shippingData)

    return(
        <React.Fragment>
            <Review checkoutToken={checkoutToken}/>
            <Divider />
            <Typography variant='h6' gutterBottom style={ {margin: '20px 0'}}>Payment method</Typography>

            <Elements stripe={stipePromise}>
                <ElementsConsumer>
                    {({elements, stripe})=> (
                        <form onSubmit={(e)=> handleSubmit(e, elements, stripe)}>
                            <CardElement />
                            <br /> <br/>
                            <div style={{display: 'flex',justifyContent: 'space-between'}}>
                                <Button variant='outlined' onClick={backStep}>Back</Button>
                                <Button type='submit' variant='contained' disabled={!stripe} color='primary'>
                                    Pay {checkoutToken.total.formatted_with_symbol}
                                </Button>
                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>

        </React.Fragment>
    )
}

export default PaymentForm