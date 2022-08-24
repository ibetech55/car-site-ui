import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Landing from '../pages/landing'

const OpenRouteComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export const OpenRoutes = () => <OpenRouteComponent />



