import Image from 'next/image';
import { Button, Link, makeStyles, Typography, withWidth } from '@material-ui/core';
import logo from '../../../public/icon/logo.png';
import cssClasses from '../../../styles/Nav.module.css';

const useStyles = makeStyles({
    btnText: {
        marginRight: 35,
        textTransform: 'capitalize'
    },
    containedBtnText: {
        textTransform: 'capitalize',
    },
    containedBtn: {
        padding: '10px 30px',
        maxWidth: 183,
        maxHeight: 51
    },
    link: {
        fontSize: 20,
        lineHeight: '24px',
        fontWeight: 500
    }
});

const Nav = () => {
    const classes = useStyles();

    return (
        <nav className={cssClasses.nav}>
            <div className={cssClasses.logo}>
                <Image src={logo} />
            </div>

            <div className={cssClasses.navLink}>
                <Link className={classes.link} color="textPrimary">Why Alivio</Link>
                <Link className={classes.link} color="textPrimary">Solutions</Link>
                <Link className={classes.link} color="textPrimary">Community</Link>
                <Link className={classes.link} color="textPrimary">Pricing</Link>
            </div>

            <div className={cssClasses.btnContainer}>
                <Button className={classes.btnText} variant="text">
                    <Typography className={classes.btn} variant="subtitle2" >Sign In</Typography>
                </Button>
                <Button className={classes.containedBtn} variant="contained" color="primary" disableElevation>
                    <Typography className={classes.containedBtnText} variant="subtitle2" >Start Trial</Typography>
                </Button>
            </div>

        </nav>
    )
}


export default Nav;