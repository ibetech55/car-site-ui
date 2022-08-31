import { useRef } from 'react'
import { Box } from '@mui/system'
import { useBrands } from '../../hooks/useBrands';
import { Footer, LandingPage, LandingPageCars, Section3 } from '../../components/landing-page-components';
import './styles.css';

const Landing: React.FC = () => {
    const section2 = useRef(null);
    const section3 = useRef(null);

    const {
        brands,
        brandId,
        models,
        modelId,
        changeBrands,
        changeModel
    } = useBrands()


    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop - section3.current.offsetHeight,
            behavior: "smooth",
        });
    };

    return (
        <>
            <LandingPage
                brands={brands}
                brandId={brandId}
                models={models}
                modelId={modelId}
                changeBrands={changeBrands}
                changeModel={changeModel}
                scrollToSection={() => scrollToSection(section2)}
                section3={section3}
            />
            <Box sx={{ padding: 2, height: '100vh', width: '100%', backgroundColor: 'red' }} ref={section2}>
                <LandingPageCars />
            </Box>
            <Section3 />
            <Footer />
        </>

    )
}

export default Landing