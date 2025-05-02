import BuiltWith from '@/features/built-with'
import GithubStarButton from '@/features/github-star-button'

export function HomePage() {
    return (
        <div className="flex h-screen">
            <div className="m-auto text-center space-y-3">
                <div className="space-y-3">
                    <BuiltWith />
                    <h1 className="text-3xl items-center">
                        Welcome to Tauri Core template!
                    </h1>
                    <p>
                        This template is a starting point for building Tauri
                        apps with Vite, React, and Tailwind CSS.
                    </p>
                </div>
                <GithubStarButton />
            </div>
        </div>
    )
}

// Necessary for react router to lazy load.
export const Component = HomePage
