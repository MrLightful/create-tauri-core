import { Button } from '@/common/components/ui/button'
import ErrorPageLayout from '@/common/features/errors/ErrorPageLayout'
import { useNavigate } from 'react-router-dom'

export default function NotFoundErrorPage() {
    const navigate = useNavigate()
    return (
        <ErrorPageLayout
            title="Page not found"
            description={
                <>Sorry, we couldn’t find the page you’re looking for.</>
            }
            actions={
                <>
                    <Button size="lg" onClick={() => navigate(-1)}>
                        Go back
                    </Button>
                    <Button size="lg" variant="ghost">
                        Contact support{' '}
                        <span aria-hidden="true" className="ml-1">
                            &rarr;
                        </span>
                    </Button>
                </>
            }
        />
    )
}
