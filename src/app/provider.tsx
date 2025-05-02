import { ReactNode } from 'react'
import AppErrorPage from '@/features/errors/app-error'
import { ErrorBoundary } from 'react-error-boundary'
import { TooltipProvider } from '@/components/ui/tooltip'

export default function AppProvider({ children }: { children: ReactNode }) {
    return (
        <ErrorBoundary FallbackComponent={AppErrorPage}>
            <TooltipProvider>{children}</TooltipProvider>
        </ErrorBoundary>
    )
}
