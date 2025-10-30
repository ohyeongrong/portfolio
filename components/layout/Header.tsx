import Link from "next/link";
import CurrentTime from "../ui/CurrentTime";


export default function Header() {

    return (
        <header className="fixed z-100 inset-0 mix-blend-difference text-white max-h-14 w-dvw">
            <div className="flex justify-between py-4 px-6 text-[clamp(1rem,0.95rem+0.25vw,1.25rem)] leading-none">
                <div className="hidden sm:block">
                    <CurrentTime/>
                </div>
                <div>
                    <h1>
                        <Link href="/"> 
                        ©2025  Oh! YeongRong
                        </Link>
                    </h1>
                </div>
                <nav>
                    <ul className="flex gap-6">
                        <li>
                            <Link href="/projects">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                Archive
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}