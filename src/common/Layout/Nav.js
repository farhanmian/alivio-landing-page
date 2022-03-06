import Image from "next/image";
import {
  Button,
  Link,
  makeStyles,
  Typography,
  withWidth,
} from "@material-ui/core";
import logo from "../../../public/icon/logo.png";
import cssClasses from "../../../styles/Nav.module.css";

const useStyles = makeStyles({
  logo: {
    maxWidth: 79.57,
    maxHeight: 23.04,
    marginRight: 172,
  },
  btnText: {
    marginRight: 35,
    textTransform: "capitalize",
    padding: 0,
  },
  containedBtnText: {
    textTransform: "capitalize",
  },
  containedBtn: {
    padding: "10px 30px",
    maxWidth: 183,
    maxHeight: 51,
  },
  link: {
    fontSize: 20,
    lineHeight: "24px",
    fontWeight: 500,
    cursor: "pointer",
  },
});

const Nav = () => {
  const classes = useStyles();

  return (
    <nav className={cssClasses.nav}>
      <div className={cssClasses.innerContainer}>
        <Link href="#" className={classes.logo}>
          <Image src={logo} />
        </Link>

        <div className={cssClasses.navLink}>
          <Link href="#" className={classes.link} color="textPrimary">
            Why Alivio
          </Link>
          <Link href="#" className={classes.link} color="textPrimary">
            Solutions
          </Link>
          <Link href="#" className={classes.link} color="textPrimary">
            Community
          </Link>
          <Link href="#" className={classes.link} color="textPrimary">
            Pricing
          </Link>
        </div>

        <div className={cssClasses.btnContainer}>
          <Button className={classes.btnText} variant="text">
            <Typography className={classes.btn} variant="subtitle2">
              Sign In
            </Typography>
          </Button>
          <Button
            className={classes.containedBtn}
            variant="contained"
            color="primary"
            disableElevation
          >
            <Typography
              className={classes.containedBtnText}
              variant="subtitle2"
            >
              Start Trial
            </Typography>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
