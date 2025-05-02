import { Button } from '@/components/ui/button'
import {
    ErrorView,
    ErrorActions,
    ErrorDescription,
    ErrorHeader
} from '@/features/errors/error-base'
import { Link } from 'react-router'
import { relaunch } from '@tauri-apps/plugin-process'

export default function ComponentErrorPage() {
    return (
        <ErrorView>
            <ErrorHeader>We&apos;re fixing it</ErrorHeader>
            <ErrorDescription>
                This component is currently experiencing technical issues.
                <br />
                We know about it and we&aposre working on it.
            </ErrorDescription>
            <ErrorActions>
                <Button size="lg" variant="ghost" onClick={relaunch}>
                    Relaunch app
                </Button>
                <Button size="lg" asChild>
                    <Link to={'/'} reloadDocument={true}>
                        Go home
                    </Link>
                </Button>
            </ErrorActions>
        </ErrorView>
    )
}
