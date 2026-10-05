interface ProjectDefinition {
  description: string;
  technologies: string[];
  codeLink?: string;
  demoLink?: string;
}

const projects = {
  'game-hub': {
    description: 'Modern game discovery app',
    technologies: ['html', 'css', 'tailwindcss', 'react', 'typescript'],
    demoLink: 'https://game-hub-houssam.vercel.app',
    codeLink: 'https://github.com/houssamouhra/game-hub',
  },
  'issue-tracker': {
    description: 'Managing and tracking software development issues',
    technologies: [
      'html',
      'css',
      'tailwindcss',
      'react',
      'typescript',
      'nextjs',
      'prisma',
      'postgresql',
    ],
    demoLink: 'https://issue-tracker-houssam.vercel.app',
    codeLink: 'https://github.com/houssamouhra/issue-tracker',
  },
} as const satisfies Record<string, ProjectDefinition>;

export type ProjectName = keyof typeof projects;

export interface Project extends ProjectDefinition {
  title: ProjectName;
}

export const getProject = (title: ProjectName): Project => ({
  title,
  ...projects[title],
});

export const getProjects = (): Project[] =>
  Object.entries(projects).map(([title, project]) => ({
    title: title as ProjectName,
    ...project,
  }));

export default projects;
