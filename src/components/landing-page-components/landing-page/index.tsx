import React, { useEffect, useRef } from 'react'
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SiteButton from '../../Button';
import SelectComponent from '../../select';
import { HeaderLink, LandingPageContainer, LandingPageHeader } from './styles';
import './styles.css'


const LandingPageComponent = ({ brands, brandId, changeBrands, models, modelId, changeModel, scrollToSection, section3 }) => {
    const navigate = useNavigate();

    window.addEventListener("scroll", function () {
        document.documentElement.style.setProperty('--primary', process.env.REACT_APP_PRIMARY_COLOR);

        let landingPageHeader = document.querySelector("#landing-page-header");
        let landingPageNavText = document.querySelectorAll("#landing-page-nav-text");

        landingPageHeader.classList.toggle("sticky", window.scrollY > 100);

        landingPageNavText.forEach(t => {
            t.classList.toggle("landing-page__nav-text", window.scrollY > 100);
        })
    });

    const handleColor = () => {
        window.addEventListener("scroll", function () {
            let landingPageHeaderButton: HTMLButtonElement = document.querySelector("#landing-page-header-button");

            if (window.scrollY > 100) {
                landingPageHeaderButton.style.backgroundColor = process.env.REACT_APP_SECONDARY_COLOR
            } else {
                landingPageHeaderButton.style.backgroundColor = process.env.REACT_APP_PRIMARY_COLOR
            }
        });
    }

    useEffect(() => {
        handleColor()
        document.documentElement.style.setProperty('--secondary', process.env.REACT_APP_SECONDARY_COLOR);
    }, [])


    return (
        <>
            <div style={{ backgroundColor: process.env.REACT_APP_PRIMARY_COLOR, height: '100vh', width: '100%', position: 'absolute', top: 0, left: 0, opacity: 0.5 }}></div>
            <LandingPageContainer>
                <LandingPageHeader id="landing-page-header" ref={section3}>
                    <Box marginRight={5}>
                        <img src={process.env.REACT_APP_LOGO} alt="" height="35px" width="70px" />
                    </Box>

                    <Box display="flex" alignItems="center" padding={0}>
                        <HeaderLink href="/" underline="none" className="landing-page__nav-link">
                            <Typography id="landing-page-nav-text">Home</Typography>
                        </HeaderLink>
                        <HeaderLink href="/about" underline="none" className="landing-page__nav-link">
                            <Typography id="landing-page-nav-text">About</Typography>
                        </HeaderLink>
                        <HeaderLink href="/" underline="none" className="landing-page__nav-link">
                            <Typography id="landing-page-nav-text">Home</Typography>
                        </HeaderLink>
                        <HeaderLink href="/" underline="none" className="landing-page__nav-link">
                            <Typography id="landing-page-nav-text">Home</Typography>
                        </HeaderLink>
                    </Box>
                    <Box marginLeft={2}>
                        <Button id="landing-page-header-button" variant='contained' color="primary" onClick={() => navigate("/login")}>Login / Sign up</Button>
                    </Box>
                </LandingPageHeader>

                <div style={{ height: '100vh', display: 'flex', justifyContent: 'start', alignItems: 'center', }}>
                    <div style={{ lineHeight: 1.5, color: "#fff", paddingRight: '50px', width: '50%' }}>
                        <div style={{ position: 'relative', zIndex: 100 }}>
                            <Typography variant='h1' sx={{ fontWeight: 'bold', marginBottom: 3 }}>Car Site</Typography>

                            <Typography sx={{ marginBottom: 2 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum atque excepturi autem accusantium delectus eum neque eos iusto quidem quibusdam possimus expedita beatae odit ipsa asperiores fugiat nam sunt a repellendus, est assumenda. !</Typography>
                        </div>

                        <div style={{ display: 'flex', marginBottom: 20, }}>
                            <SelectComponent
                                label='Brands'
                                title='Choose a brand'
                                data={brands}
                                value={brandId}
                                onChange={changeBrands}
                                marginRight={2}
                            />

                            <SelectComponent
                                label='Models'
                                title='Choose a model'
                                data={models}
                                value={modelId}
                                onChange={changeModel}
                            />
                        </div>
                        <Box>
                            <SiteButton text="Search cars" onClick={() => scrollToSection()} />
                        </Box>
                    </div>
                </div >
            </LandingPageContainer>
        </>
    )
}

export default LandingPageComponent