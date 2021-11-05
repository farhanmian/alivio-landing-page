import { Button, Typography, makeStyles } from '@material-ui/core';
import cssClasses from '../../../../styles/Header.module.css';

const useStyles = makeStyles({
    heading: {
        width: 440,
        marginBottom: 30,
        fontFamily: 'Domine'
    },
    text: {
        width: 420,
        height: 123,
        marginBottom: 18
    },
    btn: {
        width: 227,
        height: 65,
    }
});

const Header = () => {
    const classes = useStyles();

    return (
        <section className={cssClasses.header} >
            <div className={cssClasses.container}>
                <div className={cssClasses.textContainer}>
                    <Typography className={classes.heading} variant="h1" color="primary">
                        Be aware, Manage well.
                    </Typography>

                    <Typography className={classes.text} variant="subtitle1" color="textSecondary">
                        Everyone experiences stress in different ways. Let Alivio guide you, in a personalized journal experience, to overcome your stress.
                    </Typography>

                    <Button className={classes.btn} color="primary" variant="contained" disableElevation >
                        <Typography variant="subtitle2">Find Your Way</Typography>
                    </Button>
                </div>
            </div>
        </section>
    )
}


export default Header;