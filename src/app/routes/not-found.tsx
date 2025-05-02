import { Button } from '@/components/ui/button'
import {
    ErrorView,
    ErrorHeader,
    ErrorDescription,
    ErrorActions
} from '@/features/errors/error-base'
import { useNavigate } from 'react-router'

export default function NotFoundErrorPage() {
    const navigate = useNavigate()
    return (
        <ErrorView>
            <ErrorHeader>Page not found</ErrorHeader>
            <ErrorDescription>
                Sorry, we couldn’t find the page you’re looking for.
            </ErrorDescription>
            <ErrorActions>
                <Button size="lg" onClick={() => navigate(-1)}>
                    Go back
                </Button>
                <Button size="lg" variant="ghost">
                    Contact support{' '}
                    <span aria-hidden="true" className="ml-1">
                        &rarr;
                    </span>
                </Button>
            </ErrorActions>
        </ErrorView>
    )
}

// Necessary for react router to lazy load.
export const Component = NotFoundErrorPage
