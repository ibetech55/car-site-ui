import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Landing from '../pages/landing'
import Login from '../pages/login'

const OpenRouteComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export const OpenRoutes = () => <OpenRouteComponent />



