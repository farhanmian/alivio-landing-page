import { createTheme } from "@material-ui/core";

export const theme = createTheme({
    typography: {
        fontFamily: 'Lato',
        h1: {
            fontSize: 65,
            fontWeight: 700,
            lineHeight: '73.85px'
        },
        h2: {
            fontSize: 50,
            fontWeight: 700,
            lineHeight: '78.5px'
        },
        h3: {
            fontSize: 40,
            fontWeight: 900,
            lineHeight: '54.64px'
        },
        h4: {
            fontSize: 30,
            fontWeight: 700,
            lineHeight: '45px'
        },
        h6: {
            fontSize: 150,
            fontWeight: 400,
            lineHeight: '225px'
        },
        body1: {
            fontSize: 25,
            fontWeight: 600,
            lineHeight: '39.25px'
        },
        body2: {
            fontSize: 20,
            fontWeight: 500,
            lineHeight: '30px'
        },
        subtitle1: {
            fontSize: 20,
            fontWeight: 400,
            lineHeight: '31.4px'
        },
        subtitle2: {
            fontSize: 20,
            fontWeight: 400,
            lineHeight: '25px'
        },
    },
    palette: {
        primary: {
            main: '#01996D'
        },
        secondary: {
            main: '#245852'
        },
        text: {
            primary: '#292929',
            secondary: '#484848',
        }
    }
})
