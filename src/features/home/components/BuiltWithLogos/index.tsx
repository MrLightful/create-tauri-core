import reactLogo from '@/features/home/components/BuiltWithLogos/assets/react.svg'
import viteLogo from '@/features/home/components/BuiltWithLogos/assets/vite.svg'
import tauriLogo from '@/features/home/components/BuiltWithLogos/assets/tauri.svg'
import shadcnLogo from '@/features/home/components/BuiltWithLogos/assets/shadcn.svg'

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger
} from '@/common/components/ui/tooltip'

export default function BuiltWithLogos() {
    return (
        <div className="flex flex-row justify-center">
            <LogoLink href="https://vitejs.dev" src={viteLogo} alt="Vite" />
            <LogoLink href="https://tauri.app" src={tauriLogo} alt="Tauri" />
            <LogoLink href="https://reactjs.org" src={reactLogo} alt="React" />
            <LogoLink
                href="https://ui.shadcn.com"
                src={shadcnLogo}
                alt="shadcn/ui"
            />
        </div>
    )
}

function LogoLink({
    href,
    src,
    alt
}: {
    href: string
    src: string
    alt: string
}) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2"
                >
                    <img
                        className="w-10 h-10 hover:scale-125 transition-all duration-300"
                        src={src}
                        alt={alt}
                    />
                </a>
            </TooltipTrigger>
            <TooltipContent>
                <p>{alt}</p>
            </TooltipContent>
        </Tooltip>
    )
}
