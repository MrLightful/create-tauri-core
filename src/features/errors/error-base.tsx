import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

export function ErrorView({
    children,
    className
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <main
            className={cn(
                'h-full flex flex-col items-center justify-center text-center bg-red-50 p-8',
                className
            )}
        >
            <div className="text-center">
                <p className="text-base font-semibold text-red-600">Error</p>
                {children}
            </div>
        </main>
    )
}

export function ErrorHeader({
    children,
    className
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <h1
            className={cn(
                'mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl',
                className
            )}
        >
            {children}
        </h1>
    )
}

export function ErrorDescription({
    children,
    className
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <p className={cn('mt-6 text-base leading-7 text-gray-600', className)}>
            {children}
        </p>
    )
}

export function ErrorActions({
    children,
    className
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <div
            className={cn(
                'mt-10 flex items-center justify-center gap-x-6',
                className
            )}
        >
            {children}
        </div>
    )
}
