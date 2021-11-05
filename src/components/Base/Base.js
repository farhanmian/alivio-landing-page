import { ThemeProvider } from "@material-ui/styles";
import { theme } from "../../common/theme/theme";

import Header from "../HomePage/Header/Header";
import Nav from "../../common/Nav/Nav";
import Steps from "../HomePage/Steps/Steps";
import Divider from "../../common/Divider/Divider";
import Review from "../HomePage/Review/Review";
import Product from "../HomePage/Product/Product";
import Footer from "../../common/Footer/Footer";


const Base = () => {
    return (
        <ThemeProvider theme={theme}>
            <Nav />
            <Header />
            <Divider />

            <Steps />
            <Divider />

            <Review />
            <Divider />

            <Product />
            <Divider />

            <Footer />
        </ThemeProvider >
    )
}

export default Base;
