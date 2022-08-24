import { createTheme } from '@mui/material'

export const theme = createTheme({
    palette: {
        primary: {
            main: process.env.REACT_APP_PRIMARY_COLOR,
            dark: process.env.REACT_APP_SECONDARY_COLOR,
        }
    }
})