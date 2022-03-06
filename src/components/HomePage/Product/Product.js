import cssClasses from "../../../../styles/Product.module.css";
import { Button, Typography, Grid, makeStyles } from "@material-ui/core";
import img1 from "../../../../public/img/product1.png";
import img2 from "../../../../public/img/product2.png";
import Image from "next/dist/client/image";

const useStyles = makeStyles({
  container: {
    maxWidth: "100%",
    maxHeight: 648,
    margin: "auto",
    justifyContent: "space-between",
  },
  heading: {
    fontFamily: "Domine",
  },
  imgContainer: {
    width: 699.37,
    height: 648,
    position: "relative",
  },
  img: {
    position: "absolute",
  },
  img1: {
    width: 638,
    height: 573,
    top: 0,
    right: 0,
    zIndex: 1,
  },
  img2: {
    width: 296,
    height: 294,
    bottom: 0,
    left: 0,
    zIndex: 2,
  },
  btn: {
    wdith: 227,
    height: 60,
    textTransform: "capitalize",
  },
  topText: {
    marginBottom: 10,
  },
  text: {
    marginTop: 20,
    marginBottom: 40,
  },
});

const Product = () => {
  const classes = useStyles();
  return (
    <section className={cssClasses.product}>
      <div className="innerContainer">
        <Grid container className={classes.container}>
          <Grid item md={6} lg={6} xl={6} className={classes.imgContainer}>
            <div className={`${classes.img} ${classes.img1}`}>
              <Image src={img1} alt="img" />
            </div>
            <div className={`${classes.img} ${classes.img2}`}>
              <Image src={img2} alt="img" />
            </div>
          </Grid>

          <Grid item md={5} lg={5} xl={5} className={cssClasses.textContainer}>
            <Typography className={classes.topText} variant="body1">
              Our product
            </Typography>

            <Typography
              className={classes.heading}
              variant="h2"
              color="primary"
            >
              You tell us your stress,
              <br />
              We make your diary
            </Typography>

            <Typography className={classes.text} variant="subtitle1">
              Everyone experiences it, and in different ways. Let Alivio guide
              you, in a personalized journal experience, to overcome your
              stress.
            </Typography>

            <Button
              className={classes.btn}
              color="primary"
              variant="contained"
              disableElevation
            >
              <Typography variant="subtitle2">Find Your Way</Typography>
            </Button>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Product;
