import { Typography, Link, makeStyles } from "@material-ui/core";
import { common } from "@material-ui/core/colors";
import cssClasses from "../../../styles/Footer.module.css";

const useStyles = makeStyles({
  logo: {
    color: common.white,
    "&:hover": {
      textDecoration: "none",
      cursor: "pointer",
    },
  },
  link: {
    fontFamily: "Lato",
    color: "#fff",
    cursor: "pointer",
  },
  linkText: {
    // fontSize: 25,
    fontWeight: 600,
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={cssClasses.footer}>
      <div className="innerContainer">
        <div className={cssClasses.container}>
          <Link href="#" className={classes.logo}>
            <Typography variant="h3">Alivio</Typography>
          </Link>

          <Link href="#" className={classes.link}>
            <Typography variant="body2" className={classes.linkText}>
              {" "}
              Why Alivio{" "}
            </Typography>
          </Link>
          <Link href="#" className={classes.link}>
            <Typography variant="body2" className={classes.linkText}>
              {" "}
              Solutions{" "}
            </Typography>
          </Link>
          <Link href="#" className={classes.link}>
            <Typography variant="body2" className={classes.linkText}>
              {" "}
              Community{" "}
            </Typography>
          </Link>
          <Link href="#" className={classes.link}>
            <Typography variant="body2" className={classes.linkText}>
              {" "}
              Pricing{" "}
            </Typography>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
