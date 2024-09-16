import { cn } from '@/lib/utils'

type ErrorPageLayoutProps = {
    title: React.ReactNode
    description: React.ReactNode
    actions: React.ReactNode
    className?: string
}

export default function ErrorPageLayout(props: ErrorPageLayoutProps) {
    const { title, description, actions, className } = props
    return (
        <main
            className={cn(
                'h-full flex flex-col items-center justify-center text-center bg-red-50 p-8',
                className
            )}
        >
            <div className="text-center">
                <p className="text-base font-semibold text-red-600">Error</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    {title}
                </h1>
                <p className="mt-6 text-base leading-7 text-gray-600">
                    {description}
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    {actions}
                </div>
            </div>
        </main>
    )
}
