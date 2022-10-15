import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    media: {
        height: '100',
        paddingTop: '100%',

    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        color: '#938f92',
        fontFamily:'Arial',
    },
    cartActions: {
        justifyContent: 'space-between',
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
    },
}));