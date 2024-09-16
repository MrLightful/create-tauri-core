import BuiltWithLogos from '@/features/home/components/BuiltWithLogos'
import GithubStarButton from '@/features/home/components/GithubStarButton'

export default function HomePage() {
    return (
        <div className="mx-32 my-32 m-auto text-center space-y-8">
            <div className="space-y-3">
                <BuiltWithLogos />
                <h1 className="text-3xl items-center">
                    Welcome to Tauri Core template!
                </h1>
                <p>
                    This template is a starting point for building Tauri apps
                    with Vite, React, and Tailwind CSS.
                </p>
            </div>
            <GithubStarButton />
        </div>
    )
}
