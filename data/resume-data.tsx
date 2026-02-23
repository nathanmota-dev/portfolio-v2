import { FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa";
import { SiX } from "react-icons/si";

export const RESUME_DATA = {
    name: "Nathan Mota",
    initials: "NM",
    location: "Ribeirão Preto, SP, Brasil",
    techStack: ["TypeScript", "React", "Angular", "Node", "AWS"],
    locationLink: "https://www.google.com/maps/place/Ribeir%C3%A3o+Preto+-+State+of+S%C3%A3o+Paulo",
    about:
        "Desenvolvedor Full-Stack apaixonado por solucionar problemas!",
    summary: `
    Desenvolvedor Full-Stack com mais de 2 anos de experiência no desenvolvimento de aplicações web completas, do Front-End ao Back-End. Formado em Sistemas de Informação pela UFU, iniciei minha trajetória como Técnico em Informática pela Unesp FCAV, onde desenvolvi meus primeiros projetos de programação. Atualmente trabalho construindo soluções escaláveis, integrações entre sistemas, aplicando boas práticas de engenharia de software.
  `,
    avatarUrl: "https://avatars.githubusercontent.com/u/120220035?v=4",
    personalWebsiteUrl: "#",
    contact: {
        email: "nathansmota@gmail.com",
        tel: "+55 16 99993-6596",
        social: [
            {
                name: "GitHub",
                url: "https://github.com/nathanmota-dev",
                icon: FaGithub,
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/nathansmota/",
                icon: FaLinkedin,
            },
            {
                name: "X (Twitter)",
                url: "https://x.com/pq_nathan",
                icon: SiX,
            },
            {
                name: "Spotify",
                url: "https://open.spotify.com/user/d9zhqx5tfnna0pqx4or91e3re?si=bcf6f90eae0446d8",
                icon: FaSpotify,
            },
        ],
    },
    education: [
        {
            school: "Universidade Federal de Uberlândia",
            degree: "Sistemas de Informação",
            start: "2019",
            end: "2025",
        },
        {
            school: "Universidade Estadual Paulista",
            degree: "Técnico em Informática",
            start: "2015",
            end: "2016",
        },
    ],
    work: [
        {
            company: "Von Braun Labs",
            link: "https://www.linkedin.com/company/von-braun-labs/",
            badges: ["Remoto"],
            title: "Desenvolvedor Full-Stack (foco em Front-End)",
            start: "2025",
            end: "Presente",
            description:
                "Atuação focada em Angular e TypeScript. Desenvolvimento de componentes reutilizáveis, refatorações estruturais e integração com serviços AWS (S3 e EC2).",
        },
        {
            company: "Von Braun Labs",
            link: "https://www.linkedin.com/company/von-braun-labs/",
            badges: ["Remoto"],
            title: "Desenvolvedor Full-Stack",
            start: "2024",
            end: "2025",
            description:
                "Desenvolvimento de suporte a simulações SDF via web, modernização de arquitetura legada para interfaces em JavaScript/PHP e otimização de queries MySQL.",
        },
        {
            company: "X-RAT - FAPEMIG",
            link: "#",
            badges: ["Híbrido"],
            title: "Desenvolvedor Full-stack",
            start: "2024",
            end: "2025",
            description:
                "Implementação de interfaces em React e Vite para análise de falhas de software, com integração ao back-end em FastAPI para relatórios automatizados.",
        },
        {
            company: "Jovens Programadores - UFU",
            link: "#",
            badges: ["Presencial"],
            title: "Professor de Programação Web",
            start: "2024",
            end: "2024",
            description:
                "Ensino de HTML, CSS e Bootstrap para adolescentes, orientando projetos práticos e promovendo a inclusão digital.",
        },
    ],
    skills: [
        "TypeScript",
        "ReactJs",
        "Angular",
        "NextJs",
        "Node.js",
        "Fastify",
        "MySQL",
        "PostrgreSQL",
        "MongoDB",
        "AWS",
        "Docker",
    ],
    projects: [
        {
            title: "Plataforma de Videoaulas com Sistema Distribuído",
            techStack: [
                "Node",
                "Fastify",
                "RabbitMQ",
                "AWS",
                "Amazon S3",
                "PostgreSQL",
                "Next",
                "Amazon EC2",
            ],
            description:
                "Plataforma de ensino online com gerenciamento de filas para envio de vídeos, armazenamento em nuvem e sistema de autenticação e gerenciamento de cursos.",
            link: {
                label: "https://github.com/nathanmota-dev/systems-distributed",
                href: "https://github.com/nathanmota-dev/systems-distributed",
            },
        },
        {
            title: "Monte Bot - Laboratório de Robótica",
            techStack: [
                "Next",
                "NextAuth",
                "PostgreSQL",
                "TailwindCSS",
                "Shadcn/ui",
                "Three.js",
            ],
            description:
                "Site institucional com formulário de processo seletivo e autenticação com NextAuth (login via GitHub). Inclui um dashboard para visualização de inscritos e seus dados.",
            link: {
                label: "https://monte-bot.vercel.app/",
                href: "https://monte-bot.vercel.app/",
            },
        },
        {
            title: "MedAgenda",
            techStack: [
                "Java",
                "Spring Boot",
                "PostgreSQL",
                "Hibernate",
                "Docker",
                "Vite",
                "React",
                "TypeScript",
                "TailwindCSS",
            ],
            description:
                "Sistema para gerenciamento de consultório médico, incluindo gestão de pacientes, doutores e consultas.",
            link: {
                label: "https://final-project-poo2.vercel.app/",
                href: "https://final-project-poo2.vercel.app/",
            },
        },
        {
            title: "Blog com Next",
            techStack: [
                "Next",
                "TailwindCSS",
                "Shadcn.ui",
                "React-Icons",
                "@next/mdx",
            ],
            description:
                "Blog dinâmico utilizando MDX, onde cada arquivo gera automaticamente uma rota.",
            link: {
                label: "https://blog-do-nathan.vercel.app/",
                href: "https://blog-do-nathan.vercel.app/",
            },
        },
        {
            title: "Dashboard Full Stack",
            techStack: [
                "Next",
                "TailwindCSS",
                "Shadcn.ui",
                "MongoDB",
                "Docker",
            ],
            description:
                "Dashboard com CRUD de usuários, autenticação, criptografia, permissões e controle de acesso.",
            link: {
                label: "https://dashboard-next-crud.vercel.app/",
                href: "https://dashboard-next-crud.vercel.app/",
            },
        },
        {
            title: "Tech Vantage - Site Corporativo",
            techStack: [
                "PHP",
                "HTML",
                "CSS",
                "JavaScript",
                "Bootstrap",
                "MySQL",
            ],
            description:
                "Sistema funcional com cadastro de formulário e impressão de dados.",
            link: {
                label: "http://techvantage.infinityfreeapp.com/index.php",
                href: "http://techvantage.infinityfreeapp.com/index.php",
            },
        },
        {
            title: "Todo List - MERN Stack",
            techStack: [
                "MongoDB",
                "Express",
                "React",
                "Node",
                "Styled-Components",
                "Vite",
            ],
            description:
                "CRUD completo utilizando banco não relacional e sistema de login.",
            link: {
                label: "https://todo-list-mern-stack.vercel.app/",
                href: "https://todo-list-mern-stack.vercel.app/",
            },
        },
        {
            title: "Landing Page Meow Café",
            techStack: [
                "HTML",
                "CSS",
                "JavaScript",
            ],
            description:
                "Landing Page responsiva sem o uso de frameworks.",
            link: {
                label: "https://nathanmota-dev.github.io/landing-page-meow-cafe/",
                href: "https://nathanmota-dev.github.io/landing-page-meow-cafe/",
            },
        },
        {
            title: "API - FastAPI",
            techStack: [
                "Python",
                "FastAPI",
                "PostgreSQL",
            ],
            description:
                "API robusta e modularizada em Python, reaproveitada em projeto de Iniciação Científica.",
            link: {
                label: "https://github.com/nathanmota-dev/node-com-fastify",
                href: "https://github.com/nathanmota-dev/node-com-fastify",
            },
        },
        {
            title: "Landing Page Insove Medical Healthcare",
            techStack: [
                "HTML",
                "TailwindCSS",
                "RemixIcon",
                "SwiperJS",
                "ScrollReveal",
            ],
            description:
                "Landing Page para consultórios médicos com foco em experiência do usuário.",
            link: {
                label: "https://insove-medical-healthcare.netlify.app/",
                href: "https://insove-medical-healthcare.netlify.app/",
            },
        },
        {
            title: "Buscador de Nomes",
            techStack: [
                "React",
                "Node",
                "Express",
                "MySQL",
            ],
            description:
                "Buscador de nomes consumindo API no backend, com histórico de consultas.",
            link: {
                label: "https://programacao-para-internet-2.vercel.app/",
                href: "https://programacao-para-internet-2.vercel.app/",
            },
        },
        {
            title: "Google Keep Clone",
            techStack: [
                "HTML",
                "CSS",
                "JavaScript",
            ],
            description:
                "Clone do Google Keep permitindo criar, fixar, duplicar e exportar notas em CSV.",
            link: {
                label: "https://google-keep-js.vercel.app/",
                href: "https://google-keep-js.vercel.app/",
            },
        },
        {
            title: "API - Node Fastify",
            techStack: [
                "Node",
                "Fastify",
                "PostgreSQL",
            ],
            description:
                "API com CRUD utilizando banco de dados relacional.",
            link: {
                label: "https://github.com/nathanmota-dev/node-com-fastify",
                href: "https://github.com/nathanmota-dev/node-com-fastify",
            },
        },
        {
            title: "Habit Tracker",
            techStack: [
                "Next",
                "TypeScript",
                "TailwindCSS",
                "PostgreSQL",
                "NextAuth",
                "Zod",
                "Redis",
            ],
            description:
                "Aplicação para gerenciamento de hábitos com autenticação e persistência de dados.",
            link: {
                label: "https://habit-manager-six.vercel.app/",
                href: "https://habit-manager-six.vercel.app/",
            },
        },
    ],
} as const;