import React, { useState, useEffect } from 'react';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import {commerce} from '../../../lib/commerce'
import { Link } from 'react-router-dom';
import useStyles from './styles';
import AddressForm from '../AddressForm'
import PaymentForm from "../PaymentForm";

const steps = ['Shipping address', 'Payment details']

const Checkout = ({cart, order, onCaptureCheckout, error }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});
    const [isFinished, setIsFinished ] = useState(false)
    const classes = useStyles()



    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

    useEffect(() => {
        if (cart.id) {
            const generateToken = async () => {
                try {
                    const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                    setCheckoutToken(token);
                    console.log(token)

                } catch {

                }
            };

            generateToken();
        }
    }, [cart]);
    const timeout = () => {
        setTimeout(() => {
            setIsFinished(true)
        },3000)
    }
    let Confirmation = () => (order.customer ? (
        <>
            <div>
                <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
                <Divider className={classes.divider} />
                <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
            </div>
            <br />
            <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
        </>
    ) : isFinished ? (
        <React.Fragment>
            <div>
                <Typography variant="h5">Thank you for your purchase!</Typography>
                <Divider className={classes.divider} />
            </div>
            <br />
            <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
        </React.Fragment>
        )

        : (
        <div className={classes.spinner}>
            <CircularProgress />
        </div>
    ));

    if (error) {
        Confirmation = () => (
            <>
                <Typography variant="h5">Error: {error}</Typography>
                <br />
                <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
            </>
        );
    }

    const next = (data) => {
        setShippingData(data)
        console.log(data)
        commerce.checkout.checkShippingOption(checkoutToken.id, {
            shipping_option_id: data.shippingOption.id,
            country: data.shippingCountry,
        }).then((response) => {
            console.log(response)
            setCheckoutToken(response)
            nextStep()
        });

        // checkShipping(checkoutToken.id, data.shippingOption.id)

    }

    const Form = () => activeStep === 0
        ? <AddressForm checkoutToken={checkoutToken} nextStep={nextStep} next={next}/>
        : <PaymentForm shippingData={shippingData} nextStep={nextStep} backStep={backStep} checkoutToken={checkoutToken} onCaptureCheckout={onCaptureCheckout} timeout={timeout}/>


    return(
        <React.Fragment>
            <CssBaseline />
            <div className={classes.toolbar}  />
            <main className={classes.layout}  >

                <Paper className={classes.paper}>
                    <Typography variant='h4' align='center'>Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step)=>(
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}

                    </Stepper>
                    {activeStep===steps.length ? <Confirmation /> : checkoutToken && <Form/>}
                </Paper>
            </main>


        </React.Fragment>
    )
}

export default Checkout