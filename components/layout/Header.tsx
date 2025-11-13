'use client'

import Link from "next/link";
import CurrentTime from "../ui/CurrentTime";
import HoverRevealText from "../utility/HoverRevealText";
import { useLoading } from "@/context/LoadingContext";

export default function Header() {

    const HEADER_NAV_LIST = [
        {menu: 'Projects', href: '/projects'},
    ]

    const { startLoading } = useLoading();

    const handleNavigationClick = () => {
        startLoading();
    };

    return (
        <header className="fixed z-100 inset-0 mix-blend-difference max-h-14 w-dvw">
            <div className="flex justify-between py-4 px-6 text-[clamp(1rem,0.95rem+0.25vw,1.25rem)] leading-none  text-white">
                <div className="hidden sm:block">
                    <CurrentTime/>
                </div>
                <div>
                    <h1>
                        <Link href="/" onClick={handleNavigationClick}> 
                            <HoverRevealText hoverContent='©2025 Oh! YeongRong'>
                                ©2025 Oh! YeongRong
                            </HoverRevealText>
                        </Link>
                    </h1>
                </div>
                <nav>
                    <ul className="flex gap-6">
                        {
                            HEADER_NAV_LIST.map((list, i)=>
                                <li key={list.menu + i}>
                                    <Link href={list.href} onClick={handleNavigationClick}>
                                        <HoverRevealText hoverContent={list.menu}>
                                            {list.menu}
                                        </HoverRevealText>
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}