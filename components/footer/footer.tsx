import { RESUME_DATA } from "@/data/resume-data";

export default function Footer() {
    return (
        <div className="max-w-3xl mx-auto py-2">
            <footer className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-muted-foreground font-medium uppercase tracking-[0.2em] pb-4">
                <div className="flex items-center gap-4">
                    <span>Based in {RESUME_DATA.location}</span>
                </div>
                <p>© 2026 {RESUME_DATA.name} — Dev</p>
            </footer>
        </div>
    )
}