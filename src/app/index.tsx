import './global.css'

import AppRouter from '@/app/router'
import AppProvider from '@/app/provider'

export default function App() {
    return (
        <AppProvider>
            <AppRouter />
        </AppProvider>
    )
}
