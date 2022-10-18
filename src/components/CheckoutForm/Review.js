import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const Review = ({checkoutToken}) => {
    return(
        <React.Fragment>
            <Typography variant='h6' gutterBottom> Summary</Typography>
            <List disablePadding>

                {checkoutToken.line_items.map((product) => (
                    <ListItem style={{ padding: '10px 0' }} key={product.name}>
                        <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
                        <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
                    </ListItem>

                ))}
                <ListItem style={{ padding: '10px 0' }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                        {checkoutToken.total.formatted_with_symbol}
                        {console.log(checkoutToken)}
                    </Typography>
                </ListItem>
            </List>
        </React.Fragment>


    )
}

export default Review