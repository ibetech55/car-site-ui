import { Theme } from "@mui/material";
import { Box, styled } from "@mui/system";

export const LoginContainer = styled(Box, {})(({ theme }: Theme | any) => ({
    color: theme.palette.primary.main,
    backgroundImage: "url('./bg.svg')",
    backgroundSize: 'cover',
    padding: 40,
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}));

export const FormContainer = styled(Box, {})(({ theme }: Theme | any) => ({
    height: '600px',
    width: '70%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset'
}));

export const LeftContainer = styled(Box, {})(({ theme }: Theme | any) => ({
    color: '#fff',
    background: '#fff',
    height: '100%',
    width: '50%',
    padding: 30
}));

export const RightContainer = styled(Box, {})(({ theme }: Theme | any) => ({
    color: '#fff',
    background: theme.palette.primary.main,
    height: '100%',
    width: '50%',
    padding: 20
}));