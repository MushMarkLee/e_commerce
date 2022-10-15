import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    maincart: {
        paddingTop: '2%',
        height: '50vh',

    },
    title: {
        marginTop: '2%',
        fontFamily:'Arial',
        fontSize: '3vh',
        color: '#938f92'

    },
    emptyButton: {
        minWidth: '150px',
        [theme.breakpoints.down('xs')]: {
            marginBottom: '5px',
        },
        [theme.breakpoints.up('xs')]: {
            marginRight: '20px',
        },
    },
    checkoutButton: {
        minWidth: '150px',
    },
    link: {
        textDecoration: 'none',
    },
    cardDetails: {
        display: 'flex',
        marginTop: '10%',
        width: '100%',
        justifyContent: 'space-between',
        paddingBottom: '10%',
        fontFamily:'Arial',
        color: '#938f92'
    },

}));