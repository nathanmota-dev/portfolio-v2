import Link from 'next/link';
import { GitHubCalendar } from 'react-github-calendar';
import { RESUME_DATA } from "@/data/resume-data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


export default function MyGithubCalendar() {
    const grayscaleTheme = {
        light: ['#f0f0f0', '#d1d1d1', '#9e9e9e', '#616161', '#212121'],
        dark: ['#161b22', '#30363d', '#6e7681', '#afb5bb', '#ffffff'],
    };

    return (
        <Link
            href={RESUME_DATA.contact.social[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bento-card md:col-span-12 p-6 border border-border/50 rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 active:scale-[1.02]" >
            <div className="flex justify-between pb-6">
                <div className={`flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1`}>
                    <FaGithub className="w-4 h-4 text-muted-foreground" />
                    <h3 className="text-sm font-bold uppercase tracking-wider">Github Activity</h3>
                </div>
                <div>
                    <FaExternalLinkAlt />
                </div>
            </div>
            <div className="transition-all duration-150 cursor-pointer">
                <GitHubCalendar
                    username="nathanmota-dev"
                    theme={grayscaleTheme}
                    labels={{
                        totalCount: "{{count}} contribuições no último ano",
                    }}
                />
            </div>
        </Link>
    );
}