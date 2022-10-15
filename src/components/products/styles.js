import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        paddingTop: '6%',
        backgroundColor: 'none',
        padding: theme.spacing(3),
    },
    root: {
        flexGrow: 1,
    },

}));
