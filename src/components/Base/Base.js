import { ThemeProvider } from "@material-ui/styles";
import { theme } from "../../common/theme/theme";

import Header from "../HomePage/Header/Header";
import Steps from "../HomePage/Steps/Steps";
import Divider from "../../common/Divider/Divider";
import Review from "../HomePage/Review/Review";
import Product from "../HomePage/Product/Product";


const Base = () => {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Divider />

            <Steps />
            <Divider />

            <Review />
            <Divider />

            <Product />
        </ThemeProvider >
    )
}

export default Base;
