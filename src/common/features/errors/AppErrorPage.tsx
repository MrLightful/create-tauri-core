import { relaunch } from '@tauri-apps/plugin-process'
import { Button } from '@/common/components/ui/button'
import ErrorPageLayout from '@/common/features/errors/ErrorPageLayout'

export default function AppErrorPage() {
    return (
        <ErrorPageLayout
            title="We're fixing it"
            description={
                <>
                    The app encountered an error and needs to be restarted.
                    <br />
                    We know about it and we&apos;re working to fix it.
                </>
            }
            actions={
                <Button size="lg" onClick={relaunch}>
                    Relaunch app
                </Button>
            }
        />
    )
}
