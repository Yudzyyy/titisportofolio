export interface CommandItem {
    id: string;
    title: string;
    url?: string;
    category: 'page' | 'project' | 'skill' | 'action';
    description?: string;
    shortcut?: string[]; // e.g., ['G', 'H'] for Go Home
    action?: () => void;
    icon?: string;
}

export const commands: CommandItem[] = [
    // Pages
    { id: 'nav-home', title: 'Go to Home', url: '/', category: 'page' },
    { id: 'nav-explore', title: 'Explore Universe', url: '/explore', category: 'page' },
    { id: 'nav-aws-guide', title: 'AWS Deployment Guide', url: '/explore/aws-deployment', category: 'page', description: 'Next.js + Docker + Nginx on AWS' },
    { id: 'nav-about', title: 'About Me', url: '/about', category: 'page' },
    { id: 'nav-experience', title: 'View Experience', url: '/experience', category: 'page' },
    { id: 'nav-project', title: 'View Projects', url: '/project', category: 'page' },
    { id: 'nav-contact', title: 'Contact Me', url: '/contact', category: 'page' },

    // Projects
    {
        id: 'project-solar',
        title: 'Solar Panel Monitoring',
        url: '/project/solar-panel',
        category: 'project',
        description: 'IoT real-time monitoring'
    },
    {
        id: 'project-kkn',
        title: 'KKN Team Website',
        url: 'https://www.kknmenyapakomodo.site/',
        category: 'project',
        description: 'Village info portal'
    },
    {
        id: 'project-karangtaruna',
        title: 'Karangtaruna Website',
        url: 'https://kartadu.vercel.app/',
        category: 'project',
        description: 'Organization portal'
    },
    {
        id: 'project-komdigi',
        title: 'Komdigi Java Bootcamp',
        url: 'https://github.com/BPSDMP-Komdigi-Jogja-Bootcamp-Java/final-project-kelompok-10',
        category: 'project',
        description: 'Backend Java project'
    },
    {
        id: 'project-seedlabs',
        title: 'SeedLabs Security',
        url: 'https://github.com/Yudzyyy/Seedlabs-Practice',
        category: 'project',
        description: 'Network security labs'
    },
    {
        id: 'project-cicd',
        title: 'Private CI/CD Server',
        url: '#',
        category: 'project',
        description: 'Gitea + NGINX + GoAccess'
    },
    {
        id: 'project-networking',
        title: 'Data Center Network Design',
        url: '#',
        category: 'project',
        description: 'MikroTik + Dell + VLAN Planning'
    },
    {
        id: 'project-ftth',
        title: 'FTTH Design (Sumedang)',
        url: '#',
        category: 'project',
        description: 'Atoll + OptiSystem Planning'
    },
    {
        id: 'project-broadband',
        title: 'Broadband Network Lab',
        url: '#',
        category: 'project',
        description: 'Optic Splicing & Measurements'
    },

    // Skills
    { id: 'skill-python', title: 'Python Development', category: 'skill' },
    { id: 'skill-cisco', title: 'Cisco Networking', category: 'skill' },
    { id: 'skill-docker', title: 'Docker Containerization', category: 'skill' },
    { id: 'skill-ansible', title: 'Ansible Automation', category: 'skill' },

    // Actions
    {
        id: 'action-cv',
        title: 'Download Resume (CV)',
        category: 'action',
        shortcut: ['D', 'R'],
        action: () => window.open('/resume.pdf', '_blank')
    },
    {
        id: 'action-email',
        title: 'Copy Email Address',
        category: 'action',
        action: () => {
            navigator.clipboard.writeText('titiswahyudiputro2003@mail.ugm.ac.id');
            alert('Email copied to clipboard!');
        }
    },
    {
        id: 'action-github',
        title: 'Visit GitHub Profile',
        category: 'action',
        action: () => window.open('https://github.com/Yudzyyy', '_blank')
    },
];
