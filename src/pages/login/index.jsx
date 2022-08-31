import { FormControl, FormHelperText, Input, InputLabel, TextField } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import RoundedButton from '../../components/Button'
import { FormContainer, LeftContainer, LoginContainer, RightContainer } from './styles'

const Login = () => {
    const handleLogin = async () => {
        const { data } = await axios.post("/auth", { email: 'ccc@yahoo.com2', password: '111111' })
        localStorage.setItem('test', JSON.stringify(data))

        window.location = '/dashboard'
    }
    return (
        <LoginContainer>
            <FormContainer>
                <LeftContainer>
                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                        <TextField label="email" variant='outlined' size='small' sx={{ background: '#fff' }} />
                    </FormControl>
                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                        <TextField label="password" variant='outlined' size='small' sx={{ background: '#fff' }} />
                    </FormControl>
                    <FormControl fullWidth>
                        <RoundedButton text="Login" onClick={handleLogin} />
                    </FormControl>
                </LeftContainer>
                <RightContainer>
                </RightContainer>
            </FormContainer>
        </LoginContainer>
    )
}

export default Login