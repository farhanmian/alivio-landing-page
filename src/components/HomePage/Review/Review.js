import { Button, Typography, makeStyles, Grid } from "@material-ui/core";
import cssClasses from "../../../../styles/Review.module.css";
import videoImg from "../../../../public/img/video.png";
import Image from "next/dist/client/image";

const useStyles = makeStyles({
  heading: {
    width: 580,
    height: 158,
    marginBottom: 33,
    fontFamily: "Georgia, Times New Roman, Times, serif",
  },
  text: {
    marginBottom: 57,
  },
  btn: {
    width: 240,
    height: 65,
    textTransform: "none",
  },
});

const Review = () => {
  const classes = useStyles();

  return (
    <section className={cssClasses.review}>
      <Grid container alignItems="center" className={cssClasses.container}>
        <Grid
          item
          md={5}
          lg={5}
          xl={5}
          container
          className={cssClasses.textContainer}
        >
          <Typography className={classes.heading} variant="h2">
            Let`s hear about
            <br /> Kayla`s success story
          </Typography>

          <Typography className={classes.text} variant="body1">
            See how well Alivio works in a real customer`s life.
          </Typography>

          <Button
            className={classes.btn}
            variant="contained"
            color="primary"
            disableElevation
          >
            <Typography variant="subtitle2">Let`s get started</Typography>
          </Button>
        </Grid>

        <Grid item md={7} lg={7} xl={7} className={cssClasses.imgContainer}>
          <Image src={videoImg} alt="img" />
        </Grid>
      </Grid>
    </section>
  );
};

export default Review;
