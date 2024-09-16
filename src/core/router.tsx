import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '@/features/home'
import NotFoundErrorPage from '@/common/features/errors/NotFoundErrorPage'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFoundErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}
