import  {makeStyles} from "@material-ui/core/styles";
import {hover} from "@testing-library/user-event/dist/hover";

export default makeStyles(() => ({
    root: {
        maxWidth: '100',
        fontFamily:'Arial',
        color: '#938f92',
        positon: 'relative',

},
    media: {
        height: '100',
        paddingTop: '100%'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',

    },
    link: {
        textDecoration: 'none'
    },

    view: {
        opacity: '1',
        left: '0',
        top: '20px',
        width: '100%',
        height: '100%',
        display: 'flex',
        color: '#d6849e',
        fontSize: '25px',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'opacity 0.3 ease-in',
        backgroundColor: 'rgb(239, 216, 223, 0.4)',


    }


}))