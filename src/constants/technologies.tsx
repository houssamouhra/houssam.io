interface Technology {
  name: string;
  icon: string;
  iconLight?: string;
}

export const technologies: Technology[] = [
  { name: 'html', icon: '/assets/technologies/html.svg' },
  { name: 'css', icon: '/assets/technologies/css.svg' },
  { name: 'tailwindcss', icon: '/assets/technologies/tailwindcss.svg' },
  { name: 'javascript', icon: '/assets/technologies/javascript.svg' },
  { name: 'typescript', icon: '/assets/technologies/typescript.svg' },
  { name: 'nodejs', icon: '/assets/technologies/nodejs.svg' },
  { name: 'react', icon: '/assets/technologies/react.svg' },
  { name: 'postgresql', icon: '/assets/technologies/postgresql.svg' },
  {
    name: 'nextjs',
    icon: '/assets/technologies/nextjs_dark.svg',
    iconLight: '/assets/technologies/nextjs_light.svg',
  },
  { name: 'prisma', icon: '/assets/technologies/prisma.svg' },
];
