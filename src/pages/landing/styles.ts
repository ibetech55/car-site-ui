import { Box, Link } from '@mui/material';
import styled from '@emotion/styled';
import { Theme } from "@mui/system";

export const LandingPageContainer = styled(Box, {})(({ theme }: Theme | any) => ({
    color: theme.palette.primary.main,
    backgroundImage: "url('./bg.svg')",
    backgroundSize: 'cover',
    padding: 40,
}));

export const LandingPageHeader = styled(Box, {})({
    display: 'flex',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    right: 0,
    zIndex: 3000,
    width: '100%',
    "@media (max-width: 768px)": {
        display: 'none'
    }
})

export const HeaderLink = styled(Link, {})({
    letterSpacing: 3,
    padding: 15
})
