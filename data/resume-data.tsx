import { FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa";
import { SiX } from "react-icons/si";

export const RESUME_DATA = {
    name: "Nathan Mota",
    initials: "NM",
    position: "Software Engineer",
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
    initialPhrase: "Your next big application needs a solid foundation and an amazing interface. Let’s talk and build something real.",
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
    setup: {
        specsItems: [
            "Ryzen 5 7600",
            "32gb DDR5 6000mhz",
            "GTX 1660",
            "Water Cooler Aura 240mm",
            "2tb M.2 NVMe",
            "500gb Sata",
            "Aula F75",
            "Delux M600 / Zowie EC2-C",
        ],
        personalStackItems: [
            "Windows 11",
            "Cursor",
            "WSL2",
            "Codex",
            "Gemini CLI",
            "Vercel",
        ],
        workStackItems: ["Ubuntu", "VS Code", "Docker", "Figma", "AWS"],
        toolsItems: ["Notion", "Obsidian", "Insomnia", "Discord", "Spotify"],
    },
    projects: [
        {
            image: "projects/distributed.jpeg",
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
            githubUrl: "https://github.com/nathanmota-dev/systems-distributed",
            type: "fullstack",
            link: {
                label: "https://github.com/nathanmota-dev/systems-distributed",
                href: "https://github.com/nathanmota-dev/systems-distributed",
            },
        },
        {
            image: "projects/montebot.JPG",
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
            githubUrl: "https://github.com/monte-bot/montebot",
            deployUrl: "https://monte-bot.vercel.app/",
            type: "fullstack",
            link: {
                label: "https://monte-bot.vercel.app/",
                href: "https://monte-bot.vercel.app/",
            },
        },
        {
            image: "projects/poo2.JPG",
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
                "Med Agenda é um projeto desenvolvido para o gerenciamento de um consultório médico, incluindo a gestão de pacientes, doutores e consultas",
            githubUrl: "https://github.com/nathanmota-dev/final-project-poo2",
            deployUrl: "https://final-project-poo2.vercel.app/",
            type: "fullstack",
            link: {
                label: "https://final-project-poo2.vercel.app/",
                href: "https://final-project-poo2.vercel.app/",
            },
        },
        {
            image: "projects/blog.JPG",
            title: "Blog com Next",
            techStack: [
                "Next",
                "TailwindCSS",
                "Shadcn.ui",
                "React-Icons",
                "@next/mdx",
            ],
            description:
                "O objetivo do blog é permitir a criação de novos posts de forma dinâmica, utilizando arquivos MDX onde cada arquivo MDX criado gera automaticamente uma rota.",
            githubUrl: "https://github.com/nathanmota-dev/blog-nextjs",
            deployUrl: "https://blog-do-nathan.vercel.app/",
            type: "frontend",
            link: {
                label: "https://blog-do-nathan.vercel.app/",
                href: "https://blog-do-nathan.vercel.app/",
            },
        },
        {
            image: "projects/dashboard.JPG",
            title: "Dashboard Full Stack",
            techStack: [
                "Next",
                "TailwindCSS",
                "Shadcn.ui",
                "MongoDB",
                "Docker",
            ],
            description:
                "Dashborad feito com Next com CRUD de Usuários, Autenticação, Criptografia, Permissões diferentes para usuários e Resgate de informações no acesso",
            githubUrl: "https://github.com/nathanmota-dev/dashboard-next-crud",
            deployUrl: "https://dashboard-next-crud.vercel.app/",
            type: "fullstack",
            link: {
                label: "https://dashboard-next-crud.vercel.app/",
                href: "https://dashboard-next-crud.vercel.app/",
            },
        },
        {
            image: "projects/TechVantage.JPG",
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
                "Projeto Final Programação para Internet desenvolvendo um sistema funcional com alguns requisitos como Cadastro de Formulário e Impressão de Dados",
            githubUrl: "https://github.com/nathanmota-dev/Programacao-para-Internet-1",
            deployUrl: "http://techvantage.infinityfreeapp.com/index.php",
            type: "fullstack",
            link: {
                label: "http://techvantage.infinityfreeapp.com/index.php",
                href: "http://techvantage.infinityfreeapp.com/index.php",
            },
        },
        {
            image: "projects/Todo.jpg",
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
                "POC - Todo List feito com o objetivo de realizar as 4 operações de um CRUD utilizando um banco de dados não relacional, e também foi feito a realização de um Sistema de Login Completo",
            githubUrl: "https://github.com/nathanmota-dev/todo-list-mern-stack",
            deployUrl: "https://todo-list-mern-stack.vercel.app/",
            type: "fullstack",
            link: {
                label: "https://todo-list-mern-stack.vercel.app/",
                href: "https://todo-list-mern-stack.vercel.app/",
            },
        },
        {
            image: "projects/Coffee-LP.JPG",
            title: "Landing Page Meow Café",
            techStack: [
                "HTML",
                "CSS",
                "JavaScript",
            ],
            description:
                "Projeto proposto pela Codante onde o objetivo foi dar a vida ao design do Meow Café transformando-o em uma página funcional e responsiva sem o uso de frameworks.",
            githubUrl: "https://github.com/nathanmota-dev/landing-page-meow-cafe",
            deployUrl: "https://nathanmota-dev.github.io/landing-page-meow-cafe/",
            type: "frontend",
            link: {
                label: "https://nathanmota-dev.github.io/landing-page-meow-cafe/",
                href: "https://nathanmota-dev.github.io/landing-page-meow-cafe/",
            },
        },
        {
            image: "projects/FastAPI.JPG",
            title: "API - FastAPI",
            techStack: [
                "Python",
                "FastAPI",
                "PostgreSQL",
            ],
            description:
                "API feita com FastApi com o objetivo de construir uma API roubusta e modularizada em Python onde utilizei foi reaproveitada na minha Iniciação Científica",
            githubUrl: "https://github.com/nathanmota-dev/node-com-fastify",
            deployUrl: "",
            type: "backend",
            link: {
                label: "https://github.com/nathanmota-dev/node-com-fastify",
                href: "https://github.com/nathanmota-dev/node-com-fastify",
            },
        },
        {
            image: "projects/Insove-LP.JPG",
            title: "Landing Page Insove Medical Healthcare",
            techStack: [
                "HTML",
                "TailwindCSS",
                "RemixIcon",
                "SwiperJS",
                "ScrollReveal",
            ],
            description:
                "Landing Page feita utilizando TailwindCSS projetada para consultórios médicos onde o objetivo foi proporcionar uma boa experiência para médicos e pacientes.",
            githubUrl: "https://github.com/nathanmota-dev/landing-page-insove-medical-healthcare",
            deployUrl: "https://insove-medical-healthcare.netlify.app/",
            type: "frontend",
            link: {
                label: "https://insove-medical-healthcare.netlify.app/",
                href: "https://insove-medical-healthcare.netlify.app/",
            },
        },
        {
            image: "projects/Buscador.JPG",
            title: "Buscador de Nomes",
            techStack: [
                "React",
                "Node",
                "Express",
                "MySQL",
            ],
            description:
                "Projeto Final de Programação para Internet onde o objetivo foi criar um buscador de nomes consumindo uma API no backend, tratando os dados e exibindo no frontend com um histórico de consultas.",
            githubUrl: "https://github.com/nathanmota-dev/programacao-para-internet-2",
            deployUrl: "https://programacao-para-internet-2.vercel.app/",
            type: "fullstack",
            link: {
                label: "https://programacao-para-internet-2.vercel.app/",
                href: "https://programacao-para-internet-2.vercel.app/",
            },
        },
        {
            image: "projects/GoogleKeep.JPG",
            title: "Google Keep Clone",
            techStack: [
                "HTML",
                "CSS",
                "JavaScript",
            ],
            description:
                "Clone do Google Keep proposto a ser realizado sem frameworks onde permite que você faça anotações, fixe notas, duplique notas e exporte as notas para um arquivo CSV.",
            githubUrl: "https://github.com/nathanmota-dev/Google-Keep-JS",
            deployUrl: "https://google-keep-js.vercel.app/",
            type: "frontend",
            link: {
                label: "https://google-keep-js.vercel.app/",
                href: "https://google-keep-js.vercel.app/",
            },
        },
        {
            image: "projects/NodeFastify.JPG",
            title: "API - Node Fastify",
            techStack: [
                "Node",
                "Fastify",
                "PostgreSQL",
            ],
            description:
                "API com CRUD utilizando banco de dados relacional.",
            githubUrl: "https://github.com/nathanmota-dev/node-com-fastify",
            deployUrl: "",
            type: "backend",
            link: {
                label: "https://github.com/nathanmota-dev/node-com-fastify",
                href: "https://github.com/nathanmota-dev/node-com-fastify",
            },
        },
        {
            "image": "projects/portfolio-v1.png",
            "title": "Portfólio Pessoal V1",
            "techStack": [
                "Next",
                "TailwindCSS",
                "Shadcn/ui",
                "next-intl",
                "TypeScript"
            ],
            "description":
                "Primeira versão do meu portfólio focada em internacionalização (i18n), design responsivo Mobile First e suporte a Dark Mode, apresentando meus principais projetos e experiências.",
            "githubUrl": "https://github.com/nathanmota-dev/portfolio",
            "deployUrl": "https://nathanmota-portifolio.vercel.app/",
            "type": "frontend",
            "link": {
                "label": "https://nathanmota-portifolio.vercel.app/",
                "href": "https://nathanmota-portifolio.vercel.app/",
            },
        },
    ],
} as const;