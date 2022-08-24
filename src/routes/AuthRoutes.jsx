import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import { AuthTemplate } from '../templates/AuthTemplate/Auth'

const AuthRouteComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/about" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export const AuthRoutes = () => <AuthTemplate component={<AuthRouteComponent />} />



