import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Create from './Create';

const useStyles = makeStyles(theme => ({
    navbar: {
        borderBottom: '1px solid #999',
        marginBottom: '.5rem',
    },
    navbartitle: {
        fontSize: '1.5rem',
        marginBottom: '0',
    },
    navbarmenu: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        listStyle: 'none',
        height: '100%',
    }
}));

// const NavBar extends Component {
function NavBar ({onClickCreate}) {

    // constructor() {
    //     super();
    //     this.state = {
    //         title: '',
    //         code: '',
    //         tags: '',
    //         comment: '',
    //     }
    // }

    const classes = useStyles();

    const onClickCreateOnNavbar = (title, code, tags, comment) => {
        onClickCreate(title, code, tags, comment);
    }

    const [newItem, storeNewItem] = React.useState({ title: '', code: '', tags: '', comment: '' });

    // onChildrenSubmit(data) {
        // storeNewItem({
            // ...prevState,
        // })

    // render(
        return (
            <div className={classes.navbar}>
                <div className="row">
                    <div className="col">
                <h1 className={classes.navbartitle}>Code App</h1>
                <h5>v-0.01</h5>
                    </div>
                    <div className="col">
                <ul className={classes.navbarmenu}>
                    <li className="ml-5">Home</li>
                    <li className="ml-5">
                        <Create
                            onClickCreate={onClickCreateOnNavbar}
                        />
                    </li>
                    </ul>
                    </div>
                </div>
            </div>
        )
    // );
}

export default NavBar;