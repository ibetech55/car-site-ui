import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboard'
import Home from '../pages/home'
import { AuthTemplate } from '../templates/AuthTemplate/Auth'

const AuthRouteComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/about" element={<Home />} />
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}

export const AuthRoutes = () => <AuthTemplate component={<AuthRouteComponent />} />



