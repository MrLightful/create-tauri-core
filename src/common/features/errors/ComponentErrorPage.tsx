import { Button } from '@/common/components/ui/button'
import ErrorPageLayout from '@/common/features/errors/ErrorPageLayout'
import { Link } from 'react-router-dom'
import { relaunch } from '@tauri-apps/plugin-process'

export default function ComponentErrorPage() {
    return (
        <ErrorPageLayout
            title="We're fixing it"
            description={
                <>
                    This component is currently experiencing technical issues.
                    <br />
                    We know about it and we&aposre working on it.
                </>
            }
            actions={
                <>
                    <Button size="lg" variant="ghost" onClick={relaunch}>
                        Relaunch app
                    </Button>
                    <Button size="lg" asChild>
                        <Link to={'/'} reloadDocument={true}>
                            Go home
                        </Link>
                    </Button>
                </>
            }
        />
    )
}
