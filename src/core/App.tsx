import './global.css'
import { TooltipProvider } from '@/common/components/ui/tooltip'
import AppRouter from '@/core/router'
import { ErrorBoundary } from 'react-error-boundary'
import AppErrorPage from '@/common/features/errors/AppErrorPage'

function App() {
    return (
        <ErrorBoundary FallbackComponent={AppErrorPage}>
            <TooltipProvider>
                <AppRouter />
            </TooltipProvider>
        </ErrorBoundary>
    )
}

export default App
