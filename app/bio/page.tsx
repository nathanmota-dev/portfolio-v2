import Image from "next/image";
import { FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa";
import { FiBookOpen, FiMessageCircle, FiBox } from "react-icons/fi";
import { SiX } from "react-icons/si";

export default function Bio() {
    const textShift = "transition-transform duration-300 group-hover:translate-x-1";

    return (
        <div className="min-h-screen bg-background bg-noise text-foreground py-2 px-4 sm:px-6 selection:bg-primary/20">
            <main className="max-w-3xl mx-auto space-y-8">
                <nav className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-1.5 font-display font-bold text-lg">
                        Nathan Mota
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="/projects" className="nav-link">/projects</a>
                        <a href="/articles" className="nav-link">/articles</a>
                        <a href="/about" className="nav-link">/about</a>
                    </div>
                </nav>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-8 flex flex-col justify-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-glow leading-[1.1]">
                            Software Engineer
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate possimus eveniet aliquam officiis ab quod debitis, maiores eaque incidunt vel esse, eligendi soluta?
                        </p>
                    </div>
                    <div className="md:col-span-4 relative group">
                        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-3xl group-hover:bg-primary/30 transition-all duration-700"></div>
                        <div className="relative aspect-square rounded-3xl overflow-hidden border border-border/50">
                            <Image
                                src="https://avatars.githubusercontent.com/u/120220035?v=4"
                                fill
                                sizes="(min-width: 768px) 33vw, 100vw"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                alt="Profile"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {/* Tech Stack */}
                    <div
                        role="button"
                        tabIndex={0}
                        className="group bento-card md:col-span-9 p-6 space-y-4 border border-border/50 rounded-3xl cursor-pointer transition-all duration-300 hover:bg-black/2 hover:shadow-xl hover:shadow-primary/5 active:scale-[1.02]"
                    >
                        <div className={`flex items-center gap-2 ${textShift}`}>
                            <FiBox className="w-4 h-4 text-muted-foreground" />
                            <h3 className="text-sm font-bold uppercase tracking-wider">Tech Stack</h3>
                        </div>
                        <div className={`flex flex-wrap gap-2 ${textShift}`}>
                            <span className="px-2.5 py-1 rounded-lg bg-muted text-[11px] font-medium border border-border/50">React</span>
                            <span className="px-2.5 py-1 rounded-lg bg-muted text-[11px] font-medium border border-border/50">TypeScript</span>
                            <span className="px-2.5 py-1 rounded-lg bg-muted text-[11px] font-medium border border-border/50">Next.js</span>
                            <span className="px-2.5 py-1 rounded-lg bg-muted text-[11px] font-medium border border-border/50">Tailwind</span>
                        </div>
                    </div>

                    {/* GitHub */}
                    <a href="https://github.com/" target="_blank" rel="noreferrer" className="group bento-card md:col-span-3 p-6 flex flex-col items-center justify-center gap-3 border border-border/50 rounded-3xl transition-all duration-300 hover:bg-black/2 hover:shadow-xl hover:shadow-primary/5 active:scale-[1.02]">
                        <FaGithub className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />
                        <span className={`text-xs font-semibold ${textShift}`}>GitHub</span>
                    </a>

                    {/* X */}
                    <a href="https://x.com/" target="_blank" rel="noreferrer" className="group bento-card md:col-span-3 p-6 flex flex-col items-center justify-center gap-3 border border-border/50 rounded-3xl transition-all duration-300 hover:bg-black/2 hover:shadow-xl hover:shadow-primary/5 active:scale-[1.02]">
                        <SiX className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                        <span className={`text-xs font-semibold ${textShift}`}>X (Twitter)</span>
                    </a>

                    {/* Get in touch */}
                    <a href="mailto:hello@lucas.com" className="group bento-card md:col-span-6 p-6 flex items-center justify-between gap-4 border border-border/50 rounded-3xl transition-all duration-300 hover:bg-black/2 hover:shadow-xl hover:shadow-primary/5 active:scale-[1.02]">
                        <div className="flex items-center gap-4">
                            <div className="text-primary transition-transform duration-700 group-hover:rotate-360">
                                <FiMessageCircle className="w-6 h-6" />
                            </div>
                            <div className={textShift}>
                                <h3 className="font-bold font-display">Get in touch</h3>
                                <p className="text-xs text-muted-foreground">hello@lucas.com</p>
                            </div>
                        </div>
                    </a>

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="group bento-card md:col-span-3 p-6 flex flex-col items-center justify-center gap-3 border border-border/50 rounded-3xl transition-all duration-300 hover:bg-black/2 hover:shadow-xl hover:shadow-primary/5 active:scale-[1.02]">
                        <FaLinkedin className="w-6 h-6 transition-transform duration-500 group-hover:scale-110 group-hover:text-[#0A66C2]" />
                        <span className={`text-xs font-semibold ${textShift}`}>LinkedIn</span>
                    </a>

                    {/* Latest Articles */}
                    <a href="/articles" className="group bento-card md:col-span-6 p-6 space-y-3 border border-border/50 rounded-3xl transition-all duration-300 hover:bg-black/2 hover:shadow-xl hover:shadow-primary/5 active:scale-[1.02]">
                        <div className={`flex items-center gap-2 ${textShift}`}>
                            <FiBookOpen className="w-4 h-4 text-muted-foreground" />
                            <h3 className="text-sm font-bold uppercase tracking-wider">Latest Articles</h3>
                        </div>
                        <p className={`text-sm text-muted-foreground leading-relaxed ${textShift}`}>
                            Read the newest posts about engineering, product building and developer workflow.
                        </p>
                    </a>

                    {/* Spotify */}
                    <a href="#" target="_blank" rel="noreferrer" className="group bento-card md:col-span-6 p-6 space-y-3 border border-border/50 rounded-3xl transition-all duration-300 hover:bg-black/2 hover:shadow-xl hover:shadow-primary/5 active:scale-[1.02]">
                        <div className={`flex items-center gap-2 ${textShift}`}>
                            <FaSpotify className="w-4 h-4 text-muted-foreground transition-colors group-hover:text-[#1DB954]" />
                            <h3 className="text-sm font-bold uppercase tracking-wider">Spotify Playlist</h3>
                        </div>
                        <p className={`text-sm text-muted-foreground leading-relaxed ${textShift}`}>
                            A curated playlist to keep focus while coding, planning and shipping features.
                        </p>
                    </a>
                </div>

                <footer className="pt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-muted-foreground font-medium uppercase tracking-[0.2em]">
                    <div className="flex items-center gap-4">
                        <span>Based in São Paulo, BR</span>
                    </div>
                    <p>© 2026 Nathan Mota — Dev</p>
                </footer>
            </main>
        </div>
    );
}