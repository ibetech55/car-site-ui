import { Button, FormControl, Typography, InputLabel, Select, MenuItem } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useRef, useState } from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { HeaderLink, LandingPageContainer, LandingPageHeader } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '../../store/brandSlice';
import { getModelsByBrand } from '../../store/modelSlice';
import './styles.css';
import SelectComponent from '../../components/select';
import { useBrands } from '../../hooks/useBrands';
import RoundedButton from '../../components/RoundedButton';

const { REACT_APP_PRIMARY_COLOR, REACT_APP_LOGO, REACT_APP_LANDING_IMAGE, REACT_APP_SECONDARY_COLOR } = process.env

const Landing: React.FC = () => {

    const {
        brands,
        brandId,
        models,
        modelId,
        changeBrands,
        changeModel
    } = useBrands()

    const section2 = useRef(null);


    window.addEventListener("scroll", function () {
        document.documentElement.style.setProperty('--primary', REACT_APP_PRIMARY_COLOR);
        document.documentElement.style.setProperty('--secondary', REACT_APP_SECONDARY_COLOR);


        let landingPageHeader = document.querySelector("#landing-page-header");
        let landingPageNavText = document.querySelectorAll("#landing-page-nav-text");

        landingPageHeader.classList.toggle("sticky", window.scrollY > 100);

        landingPageNavText.forEach(t => {
            t.classList.toggle("landing-page__nav-text", window.scrollY > 100);
        })
    });


    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetHeight + (elementRef.current.offsetTop / 5),
            behavior: "smooth",
        });
    };

    const handleLoginNav = () => { }


    return (
        <>
            <LandingPageContainer>
                <LandingPageHeader id="landing-page-header">
                    <Box marginRight={5}>
                        <img src={REACT_APP_LOGO} alt="" height="35px" width="70px" />
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
                    <Box>
                        <RoundedButton text="Login / Sign up" onClick={() => handleLoginNav()} />
                    </Box>
                </LandingPageHeader>

                <div ref={section2} style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                    <div style={{ lineHeight: 1.5, color: "#fff", paddingRight: '50px', width: '50%' }}>
                        <Typography variant='h1' sx={{ fontWeight: 'bold', color: REACT_APP_PRIMARY_COLOR, marginBottom: 3 }}>Car Site</Typography>

                        <Typography sx={{ marginBottom: 2, color: REACT_APP_PRIMARY_COLOR }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum atque excepturi autem accusantium delectus eum neque eos iusto quidem quibusdam possimus expedita beatae odit ipsa asperiores fugiat nam sunt a repellendus, est assumenda. !</Typography>
                        <div style={{ display: 'flex', marginBottom: 20 }}>
                            <SelectComponent
                                label='Brands'
                                title='Choose a brand'
                                data={brands}
                                value={brandId}
                                onChange={changeBrands}
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
                            <RoundedButton text="Search cars" onClick={() => scrollToSection(section2)} />
                        </Box>
                    </div>
                    <div style={{ width: '50%' }}>
                        <img src={REACT_APP_LANDING_IMAGE} alt="" height="350px" width="80%" style={{ display: 'block', margin: '0 auto' }} />
                    </div>
                </div >
            </LandingPageContainer>
            <div style={{ height: '100vh', width: '100%', backgroundColor: 'red' }}>Test</div>
            <Box sx={{ padding: 5, background: REACT_APP_PRIMARY_COLOR, color: "#fff" }}>
                <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: 2 }}>Section 3</Typography>
                <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ratione voluptatum, officia error esse veritatis ipsam! Enim perspiciatis laborum placeat. Cumque modi harum vero quibusdam, doloribus odio laboriosam quo deserunt iusto voluptates soluta, veritatis repudiandae obcaecati culpa et! Necessitatibus rem enim sapiente aspernatur quod dolorem, deserunt libero ea nisi tempore.</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: "60px 40px" }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '50%', color: REACT_APP_PRIMARY_COLOR }}>
                    <Box>
                        <Typography sx={{ marginBottom: 1, fontWeight: 'bold' }}>Text</Typography>
                        <Typography sx={{ marginBottom: 1, fontSize: 13 }}>Text</Typography>
                        <Typography sx={{ marginBottom: 1, fontSize: 13 }}>Text</Typography>
                        <Typography sx={{ marginBottom: 1, fontSize: 13 }}>Text</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ marginBottom: 1, fontWeight: 'bold' }}>Text</Typography>
                        <Typography sx={{ marginBottom: 1, fontSize: 13 }}>Text</Typography>
                        <Typography sx={{ marginBottom: 1, fontSize: 13 }}>Text</Typography>
                        <Typography sx={{ marginBottom: 1, fontSize: 13 }}>Text</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ marginBottom: 1, fontWeight: 'bold' }}>Text</Typography>
                        <Typography sx={{ marginBottom: 1, fontSize: 13 }}>Text</Typography>
                        <Typography sx={{ marginBottom: 1, fontSize: 13 }}>Text</Typography>
                        <Typography sx={{ marginBottom: 1, fontSize: 13 }}>Text</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ marginBottom: 1, fontWeight: 'bold' }}>Text</Typography>
                        <Typography sx={{ marginBottom: 1, fontSize: 13 }}>Text</Typography>
                        <Typography sx={{ marginBottom: 1, fontSize: 13 }}>Text</Typography>
                        <Typography sx={{ marginBottom: 1, fontSize: 13 }}>Text</Typography>
                    </Box>
                </Box>
                <Box display="flex">
                    <FacebookRoundedIcon color='primary' fontSize="medium" sx={{ marginLeft: 3 }} />
                    <FacebookRoundedIcon color='primary' fontSize="medium" sx={{ marginLeft: 3 }} />
                    <FacebookRoundedIcon color='primary' fontSize="medium" sx={{ marginLeft: 3 }} />
                    <FacebookRoundedIcon color='primary' fontSize="medium" sx={{ marginLeft: 3 }} />
                </Box>
            </Box>

        </>

    )
}

export default Landing