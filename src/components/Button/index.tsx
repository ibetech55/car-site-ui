import React, { useEffect } from 'react'
import { Button } from '@mui/material'

interface IProps {
    text: string;
    onClick: (value?: any) => any;
    type?: "primary" | "inherit" | "secondary" | "success" | "error" | "info" | "warning";
    variant?: "text" | "contained" | "outlined";
}

const SiteButton = ({ text, onClick, type = 'primary', variant = 'contained' }: IProps) => {


    return (
        <>
            <Button color={type} variant={variant} onClick={onClick}>{text}</Button>
        </>
    )
}

export default SiteButton