import { makeStyles, Typography, Grid } from "@material-ui/core"
import { grey } from "@material-ui/core/colors";
import cssClasses from '../../../../styles/Steps.module.css';

const useStyles = makeStyles({
    topText: {
        fontSize: 24,
        lineHeight: '37.68px',
    },
    heading: {
        fontFamily: 'Domine',
    },
    color: {
        color: '#424242'
    }
})

export default function Top() {
    const classes = useStyles();

    return (
        <div className={cssClasses.top}>
            <Typography className={`${classes.topText} ${classes.color}`} variant="body1"  >How it works</Typography>

            <Grid container alignItems="center" >
                <Grid item md={6} xl={6} >
                    <Typography className={classes.heading} variant="h2" color="primary" >Understand & Release the stress in 3 steps</Typography>
                </Grid>
                <Grid item md={6} xl={6}   >
                    <Typography className={classes.color} variant="body2">
                        Alivio offers as many journals it takes, tackling different areas such as anxiety, overwhelmedness, sadness, or anger, and a variety of personal causes, to help you become aware of your emotions, and guide you in how to manage stress.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}
