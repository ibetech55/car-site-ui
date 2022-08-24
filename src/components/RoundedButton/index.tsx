import React, { useEffect } from 'react'
import { Button } from '@mui/material'

interface IProps {
    text: string;
    onClick: (value?: any) => any
}

const RoundedButton = ({ text, onClick }: IProps) => {

    const { REACT_APP_PRIMARY_COLOR, REACT_APP_LOGO, REACT_APP_LANDING_IMAGE, REACT_APP_SECONDARY_COLOR } = process.env


    const handleColor = () => {
        window.addEventListener("scroll", function () {
            let landingPageHeaderButton: HTMLButtonElement = document.querySelector("#landing-page-header-button");

            if (window.scrollY > 100) {
                landingPageHeaderButton.style.backgroundColor = REACT_APP_SECONDARY_COLOR
            } else {
                landingPageHeaderButton.style.backgroundColor = REACT_APP_PRIMARY_COLOR
            }
        });
    }

    useEffect(() => {
        handleColor()
    }, [])

    return (
        <>
            <Button id="landing-page-header-button" variant="contained" sx={{ padding: '5px 60px', borderRadius: 20 }} onClick={onClick}>{text}</Button>
        </>
    )
}

export default RoundedButton