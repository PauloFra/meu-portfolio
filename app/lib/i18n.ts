export type Lang = "pt" | "en";

export type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
};

export const translations = {
  pt: {
    nav: {
      about: "Sobre",
      skills: "Skills",
      experience: "Experiência",
      education: "Formação",
      blog: "Blog",
      contact: "Contato",
    },
    hero: {
      available: "Disponível para novos projetos",
      role: "Desenvolvedor Full-Stack",
      tagline:
        "Construo aplicações web escaláveis e bem-feitas — do banco de dados à interface.",
      ctaContact: "Vamos conversar",
      ctaWork: "Ver experiência",
      facts: {
        location: "Rio Grande do Sul, Brasil",
        focus: "Web · SaaS · E-commerce",
        current: "Software Engineer @ Usaflex",
      },
    },
    about: {
      kicker: "Sobre mim",
      title: "Código com propósito, não só funcionando.",
      body: "Sou desenvolvedor full-stack focado em criar aplicações web que unem funcionalidade e um design intuitivo. Especialista em React, Next.js, TypeScript e Node.js, minha trajetória passa por um sistema de gerenciamento de vagas no meu TCC e soluções de e-commerce na Usaflex com VTEX IO. Sou movido por colaboração, aprendizado contínuo e pela entrega de projetos escaláveis, sempre buscando elevar a experiência do usuário.",
    },
    sections: {
      skills: "Skills & ferramentas",
      skillsSub: "A stack que uso no dia a dia.",
      experience: "Experiência",
      experienceSub: "Onde já construí coisas.",
      education: "Formação & certificados",
      educationSub: "Como continuo evoluindo.",
      contact: "Vamos trabalhar juntos",
      contactSub: "Aberto a projetos e oportunidades full-time.",
    },
    experiences: [
      {
        title: "Software Engineer",
        company: "DBC Company / Usaflex",
        period: "Março 2022 - Presente",
        description:
          "Atuo no desenvolvimento da nova plataforma de e-commerce da Usaflex, com VTEX IO, ReactJS e NodeJS — novas funcionalidades e integrações dentro do ecossistema OMNI Channel.\n\n" +
          "System Design, otimização de performance, análise de requisitos, prototipação, gestão de risco e documentação.\n\n" +
          "Apoio ao time via pair programming e code reviews.\n\n" +
          "Liderança de squad focada no checkout, incluindo integrações com terceiros e otimizações de performance.\n\n" +
          "Experiência com DevOps: AWS, Azure, Docker e Bash scripting, além de microservices escaláveis com Node.js e GraphQL.",
        technologies: [
          "VTEX IO",
          "React",
          "Node.js",
          "GraphQL",
          "AWS",
          "Docker",
        ],
      },
      {
        title: "Desenvolvimento Web",
        company: "DBC Company",
        period: "Fevereiro 2022 - Junho 2022",
        description:
          "Participação no desenvolvimento de aplicações web com React, TypeScript e Redux, implementando funcionalidades interativas e otimizando a experiência do usuário.\n\n" +
          "Desenvolvimento de um sistema de gerenciamento de candidatos e vagas, com módulo de login, fluxo de matrícula e painel administrativo de status.",
        technologies: ["React", "TypeScript", "Redux", "Styled Components"],
      },
    ] as Experience[],
    highlights: [
      {
        name: "Usaflex",
        body: "Nova plataforma de e-commerce com VTEX IO, ReactJS e NodeJS, com integrações dentro do ecossistema OMNI Channel.",
        href: "https://www.usaflex.com.br/",
        cta: "Visitar a loja",
      },
    ],
    education: {
      academic: {
        title: "Formação acadêmica",
        items: [
          {
            org: "Senac RS",
            course: "Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS)",
            period: "Fev 2025 - Ago 2027",
          },
          {
            org: "Senac RS",
            course: "Técnico em Desenvolvimento de Software",
            period: "Fev 2022 - Out 2023",
          },
        ],
      },
      certs: {
        title: "Licenças & certificados",
        items: [
          {
            org: "TargetTrust",
            course: "Primeiros Passos — Programação e Integração de Sistemas",
            period: "Jan 2020 - Jan 2021",
            href: "https://targettrust.com.br/",
            linkLabel: "Conhecer a Target Trust",
          },
          {
            org: "Udemy",
            course: "JavaScript e TypeScript — do básico ao avançado",
            period: "Emitido em Fev 2025",
            href: "https://www.udemy.com/certificate/UC-4bc03b33-bc73-4c89-8be7-b0aa8dfd49d2/",
            linkLabel: "Ver credencial",
          },
        ],
      },
      vemSer: {
        title: "Programa Vem Ser · DBC Company",
        body: [
          "No estágio na DBC Company participei da criação de aplicações web com React, TypeScript e Redux, implementando funcionalidades interativas e otimizando performance e experiência do usuário.",
          "No meu TCC desenvolvi um sistema de gerenciamento de candidatos e vagas: módulo de login, fluxo de matrícula em vagas e painel administrativo para gerenciar o status dos candidatos.",
        ],
        href: "https://www.dbccompany.com.br/vem-ser/",
        cta: "Saiba mais sobre o Vem Ser",
      },
    },
    contact: {
      intro:
        "Fique à vontade para entrar em contato — dúvidas, projetos ou só um oi.",
      form: {
        name: "Nome",
        email: "Email",
        message: "Mensagem",
        send: "Enviar mensagem",
        subject: "Contato pelo portfólio",
        opening: "Abrindo seu aplicativo de email...",
      },
    },
    footer: {
      built: "Feito com Next.js, Tailwind e bastante café",
      rights: "Todos os direitos reservados.",
    },
    blog: {
      title: "Blog",
      subtitle: "Meu espaço para compartilhar conhecimento e experiências.",
      available: "posts disponíveis",
      back: "Voltar para a Home",
      loading: "Carregando posts...",
      errorTitle: "Erro ao carregar posts",
      retry: "Tentar novamente",
      empty: "Nenhum post encontrado",
      page: "Página",
      of: "de",
      posts: "posts",
      prev: "Anterior",
      next: "Próxima",
      soon: "Em breve",
      soonSub: "Estou preparando conteúdo por aqui. Volte logo!",
    },
    a11y: {
      theme: "Alternar tema",
      lang: "Alternar idioma",
      menu: "Abrir menu",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      available: "Available for new projects",
      role: "Full-Stack Developer",
      tagline:
        "I build scalable, well-crafted web apps — from the database to the interface.",
      ctaContact: "Let's talk",
      ctaWork: "See experience",
      facts: {
        location: "Rio Grande do Sul, Brazil",
        focus: "Web · SaaS · E-commerce",
        current: "Software Engineer @ Usaflex",
      },
    },
    about: {
      kicker: "About me",
      title: "Code with intent, not just code that runs.",
      body: "I'm a full-stack developer focused on building web apps that pair real functionality with intuitive design. Specialized in React, Next.js, TypeScript and Node.js, my path runs through a job-management system for my final project and e-commerce solutions at Usaflex with VTEX IO. I'm driven by collaboration, continuous learning and shipping scalable projects — always raising the bar on user experience.",
    },
    sections: {
      skills: "Skills & tools",
      skillsSub: "The stack I work with every day.",
      experience: "Experience",
      experienceSub: "Where I've built things.",
      education: "Education & certificates",
      educationSub: "How I keep leveling up.",
      contact: "Let's work together",
      contactSub: "Open to projects and full-time roles.",
    },
    experiences: [
      {
        title: "Software Engineer",
        company: "DBC Company / Usaflex",
        period: "March 2022 - Present",
        description:
          "I work on Usaflex's new e-commerce platform with VTEX IO, ReactJS and NodeJS — new features and integrations within the OMNI Channel ecosystem.\n\n" +
          "System design, performance optimization, requirements analysis, prototyping, risk management and documentation.\n\n" +
          "Supporting the team through pair programming and code reviews.\n\n" +
          "Led a squad focused on the checkout, including third-party integrations and performance improvements.\n\n" +
          "DevOps experience: AWS, Azure, Docker and Bash scripting, plus scalable microservices with Node.js and GraphQL.",
        technologies: [
          "VTEX IO",
          "React",
          "Node.js",
          "GraphQL",
          "AWS",
          "Docker",
        ],
      },
      {
        title: "Web Development",
        company: "DBC Company",
        period: "February 2022 - June 2022",
        description:
          "Took part in building web applications with React, TypeScript and Redux, implementing interactive features and improving the user experience.\n\n" +
          "Built a candidate and job management system with a login module, an enrollment flow and an admin status panel.",
        technologies: ["React", "TypeScript", "Redux", "Styled Components"],
      },
    ] as Experience[],
    highlights: [
      {
        name: "Usaflex",
        body: "New e-commerce platform with VTEX IO, ReactJS and NodeJS, with integrations inside the OMNI Channel ecosystem.",
        href: "https://www.usaflex.com.br/",
        cta: "Visit the store",
      },
    ],
    education: {
      academic: {
        title: "Education",
        items: [
          {
            org: "Senac RS",
            course: "Technologist in Systems Analysis and Development",
            period: "Feb 2025 - Aug 2027",
          },
          {
            org: "Senac RS",
            course: "Technical degree in Software Development",
            period: "Feb 2022 - Oct 2023",
          },
        ],
      },
      certs: {
        title: "Licenses & certificates",
        items: [
          {
            org: "TargetTrust",
            course: "First Steps — Programming & Systems Integration",
            period: "Jan 2020 - Jan 2021",
            href: "https://targettrust.com.br/",
            linkLabel: "Visit Target Trust",
          },
          {
            org: "Udemy",
            course: "JavaScript & TypeScript — from basics to advanced",
            period: "Issued Feb 2025",
            href: "https://www.udemy.com/certificate/UC-4bc03b33-bc73-4c89-8be7-b0aa8dfd49d2/",
            linkLabel: "View credential",
          },
        ],
      },
      vemSer: {
        title: "Vem Ser Program · DBC Company",
        body: [
          "During my internship at DBC Company I helped build web apps with React, TypeScript and Redux, implementing interactive features and improving performance and UX.",
          "For my final project I built a candidate and job management system: a login module, a job enrollment flow and an admin panel to manage candidate status.",
        ],
        href: "https://www.dbccompany.com.br/vem-ser/",
        cta: "Learn more about Vem Ser",
      },
    },
    contact: {
      intro: "Feel free to reach out — questions, projects, or just a hello.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send message",
        subject: "Message from your portfolio",
        opening: "Opening your email app...",
      },
    },
    footer: {
      built: "Built with Next.js, Tailwind and plenty of coffee",
      rights: "All rights reserved.",
    },
    blog: {
      title: "Blog",
      subtitle: "My space to share knowledge and experiences.",
      available: "posts available",
      back: "Back to Home",
      loading: "Loading posts...",
      errorTitle: "Failed to load posts",
      retry: "Try again",
      empty: "No posts found",
      page: "Page",
      of: "of",
      posts: "posts",
      prev: "Previous",
      next: "Next",
      soon: "Coming soon",
      soonSub: "I'm cooking up some content here. Check back soon!",
    },
    a11y: {
      theme: "Toggle theme",
      lang: "Toggle language",
      menu: "Open menu",
    },
  },
} as const;

export type Dictionary = (typeof translations)[Lang];
