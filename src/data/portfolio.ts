import type { Profile, Skill, Education, Experience, Service, Project, Statistic, SocialLink } from '../types';

export const profile: Profile = {
  name: 'Hisyam Eka Pramudita',
  nickname: 'Sam',
  profession: 'Information Systems Student & Junior Data Analyst',
  experience: '1 Year',
  tagline: 'Transforming data into insights and building solutions through data analysis and automation.',
  description: 'Information Systems undergraduate interested in data analysis and business process automation. Experienced in sentiment analysis, exploratory data analysis (EDA), and data visualization using RapidMiner. Skilled in Python, MySQL, and Microsoft Excel for data processing, analysis, and integration.',
  location: 'Indonesia',
  email: 'syamjoj@gmail.com',
  languages: ['Indonesia (Native)', 'English (Intermediate)'],
};

export const skills: Skill[] = [
  { name: 'Python', level: 85, category: 'technical' },
  { name: 'MySQL', level: 80, category: 'technical' },
  { name: 'HTML', level: 90, category: 'technical' },
  { name: 'CSS', level: 85, category: 'technical' },
  { name: 'RapidMiner', level: 75, category: 'technical' },
  { name: 'Power BI', level: 70, category: 'technical' },
  { name: 'Looker Studio', level: 65, category: 'technical' },
  { name: 'Microsoft Excel', level: 85, category: 'tool' },
  { name: 'Microsoft Word', level: 90, category: 'tool' },
  { name: 'Microsoft PowerPoint', level: 85, category: 'tool' },
  { name: 'Canva', level: 80, category: 'design' },
  { name: 'Figma', level: 70, category: 'design' },
];

export const softSkills: string[] = [
  'Interpersonal Communication',
  'Team Collaboration',
  'Relationship Building',
];

export const education: Education[] = [
  {
    institution: 'Institut Teknologi Garut',
    degree: 'Information Systems',
    period: '2023 – Sekarang',
  },
];

export const experiences: Experience[] = [
  {
    title: 'Ketua Kelompok',
    organization: 'Mata Kuliah Analisis dan Perancangan Sistem Informasi',
    period: 'Februari 2025 – Juli 2025',
    description: [
      'Memimpin tim dalam menganalisis alur kerja sistem dan mengidentifikasi kebutuhan fungsional dan non-fungsional.',
      'Menyusun solusi berbasis desain sistem untuk menyelesaikan permasalahan bisnis.',
    ],
  },
  {
    title: 'Anggota',
    organization: 'Gifttime (Tim Bisnis Digital Mahasiswa)',
    period: 'Juli 2024 – April 2025',
    description: [
      'Memberikan dukungan teknis kepada tim dalam pengelolaan database menggunakan MySQL.',
    ],
  },
];

export const services: Service[] = [
  {
    title: 'Data Analysis',
    icon: 'chart',
    description: 'Analyzing complex datasets to extract actionable insights and support data-driven decision making.',
  },
  {
    title: 'Dashboard Visualization',
    icon: 'dashboard',
    description: 'Creating interactive and intuitive dashboards using Power BI, Looker Studio, and other visualization tools.',
  },
  {
    title: 'Business Process Modeling',
    icon: 'process',
    description: 'Mapping and optimizing business processes to improve efficiency and reduce operational costs.',
  },
  {
    title: 'System Modeling',
    icon: 'system',
    description: 'Designing system architectures and models to solve complex business problems.',
  },
];

export const projects: Project[] = [
  {
    title: 'Osamunime – Fullstack Web Application',
    category: 'web',
    tech: ['Laravel', 'MySQL', 'Tailwind CSS', 'JavaScript', 'Bootstrap'],
    description: 'Aplikasi web fullstack untuk mencari dan mengelola daftar anime favorit pengguna. Pengguna dapat menelusuri berbagai judul anime, menyimpannya ke daftar favorit, serta memberikan rating dan ulasan.',
    link: 'https://github.com/shineistu86/Osamunime-App',
  },
  {
    title: 'NationNote – Country Information Web App',
    category: 'web',
    tech: ['React', 'Vite', 'REST Countries API'],
    description: 'Aplikasi web frontend yang menampilkan informasi negara-negara di dunia dengan fitur pencarian, filter wilayah, dan halaman detail negara.',
    link: 'nationnote-app.vercel.app',
  },
  {
    title: 'DANA Sentiment Analysis',
    category: 'data',
    tech: ['Python', 'pandas', 'matplotlib', 'seaborn', 'WordCloud'],
    description: 'Analisis sekitar 10.000 ulasan pengguna aplikasi DANA untuk memahami distribusi rating, tren ulasan harian, dan kata kunci yang sering muncul.',
    link: 'https://github.com/shineistu86/dana-sentiment-analysis',
  },
  {
    title: 'Heating Oil Consumption Prediction',
    category: 'data',
    tech: ['RapidMiner'],
    description: 'Proyek data science menggunakan metodologi CRISP-DM untuk memprediksi konsumsi minyak pemanas rumah tangga berdasarkan data lingkungan dan demografi.',
  },
  {
    title: 'Comic Manager – Desktop Application',
    category: 'desktop',
    tech: ['Python', 'PySimpleGUI', 'pandas', 'MySQL'],
    description: 'Aplikasi desktop GUI untuk mengelola koleksi komik dengan penyimpanan data di MySQL dan Excel sebagai backup.',
    link: 'https://github.com/shineistu86/Pencatatan-Comic',
  },
];

export const statistics: Statistic[] = [
  { label: 'Projects Completed', value: '5+', icon: 'project' },
  { label: 'Technologies', value: '10+', icon: 'tech' },
  { label: 'Experience', value: '1 Year', icon: 'experience' },
  { label: 'Happy Clients', value: '3+', icon: 'client' },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/shineistu86',
    icon: 'github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hisyam-eka-pramudita-0a1667248/',
    icon: 'linkedin',
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/isaac.tangiss/',
    icon: 'instagram',
  },
];

export const categoryFilters = [
  { label: 'All', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Data Analysis', value: 'data' },
  { label: 'Desktop', value: 'desktop' },
];
