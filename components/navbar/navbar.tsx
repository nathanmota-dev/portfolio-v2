"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FiArrowLeft } from "react-icons/fi"
import { Button } from "../button/button"

export default function Navbar() {
    const pathname = usePathname()
    const isHome = pathname === "/"

    return (
        <div className="max-w-3xl mx-auto space-y-8 py-2 px-3 md:px-0">
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
                    <a href="/projects" className="nav-link">/projects</a>
                    <a href="/articles" className="nav-link">/articles</a>
                    <a href="/contact" className="nav-link">/contact</a>
                </div>
            </nav>
        </div>
    )
}
