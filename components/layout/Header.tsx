import Link from "next/link";
import CurrentTime from "../ui/CurrentTime";


export default function Header() {

    return (
        <header className="fixed z-100 inset-0 mix-blend-difference text-white max-h-14">
            <div className="flex justify-between py-4 px-6 sm:text-base md:text-lg lg:text-xl">
                <div>
                    <CurrentTime/>
                </div>
                <div className="sm:px-20">
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