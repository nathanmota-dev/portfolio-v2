"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FiArrowLeft } from "react-icons/fi"
import { Button } from "../button/button"
import { ThemeToggle } from "../theme-toggle/theme-toggle"

export default function Navbar() {
    const pathname = usePathname()
    const isHome = pathname === "/"

    return (
        <div className="max-w-3xl mx-auto space-y-8 py-2 px-4 lg:px-0">
            <nav className="flex items-center justify-between py-4">
                {isHome ? (
                    <div className="flex items-center font-display font-bold text-lg">
                        Nathan Mota
                    </div>
                ) : (
                    <Button asChild variant="outline" size="icon">
                        <Link href="/" aria-label="Voltar para início">
                            <FiArrowLeft />
                        </Link>
                    </Button>
                )}
                <div className="flex items-center gap-4 md:gap-6">
                    <Link href="/projects" className="nav-link">/projects</Link>
                    <Link href="/articles" className="nav-link">/articles</Link>
                    <Link href="/contact" className="nav-link">/contact</Link>
                    <ThemeToggle />
                </div>
            </nav>
        </div>
    )
}
