import {extendTheme} from "@mui/joy";

const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    50: "#A36102",
                    100: "#A35702",
                    200: "#A35202",
                    300: "#A34D02",
                    400: "#A34802",
                    500: "#A34302",
                    600: "#A33E02",
                    700: "#A33902",
                    800: "#A33402",
                    900: "#A32F02",
                }
            }
        },
        dark: {
            palette: {
                primary: {
                    50: "#A36102",
                    100: "#A35702",
                    200: "#A35202",
                    300: "#A34D02",
                    400: "#A34802",
                    500: "#A34302",
                    600: "#A33E02",
                    700: "#A33902",
                    800: "#A33402",
                    900: "#A32F02",
                }
            }
        }
    },
    components: {
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: "white"
                }
            }
        }
    }
})

export default theme