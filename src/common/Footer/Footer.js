import { Typography, Link, makeStyles } from '@material-ui/core';
import { common } from '@material-ui/core/colors';
import cssClasses from '../../../styles/Footer.module.css';

const useStyles = makeStyles({
    logo: {
        color: common.white
    },
    link: {
        fontFamily: 'Lato',
        color: '#fff'
    }
}) 

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={cssClasses.footer}>
            <div className={cssClasses.container}>

                <Link className={classes.logo}>
                    <Typography variant="h3">
                        Alivio
                    </Typography>
                </Link>

                <Link className={classes.link}>Why Alivio</Link>
                <Link className={classes.link}>Solutions</Link>
                <Link className={classes.link}>Community</Link>
                <Link className={classes.link}>Pricing</Link>

            </div>
        </footer>
    )
}


export default Footer;