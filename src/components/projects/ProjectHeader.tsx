import Link from 'next/link';
import { Code2, Paperclip } from 'lucide-react';
import type { Project } from '@/constants/projects';
import ShowcaseHeader from '@/components/showcase/ShowcaseHeader';
import ProjectTechnologies from '@/components/projects/ProjectTechnologies';

interface ProjectHeaderProps {
  project: Project;
}

const linkClassname =
  'flex items-center gap-1.5 text-primary duration-300 transition-colors hover:text-primary/70';

const ProjectHeader = ({ project }: ProjectHeaderProps) => {
  return (
    <>
      <ShowcaseHeader title={project.title} />
      <div className='grid gap-4 sm:grid-cols-[minmax(0,1fr)_max-content] sm:items-end'>
        <ProjectTechnologies ptechnologies={project.technologies} />
        <div className='flex flex-wrap items-center gap-4 sm:justify-self-end'>
          {project.demoLink && (
            <Link href={project.demoLink} target='_blank' rel='noreferrer' className='z-2'>
              <div className={linkClassname}>
                <Paperclip className='h-4 w-4' />
                <span>View demo</span>
              </div>
            </Link>
          )}
          {project.codeLink && (
            <Link href={project.codeLink} target='_blank' rel='noreferrer' className='z-2'>
              <div className={linkClassname}>
                <Code2 className='h-4 w-4' />
                <span>View code</span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectHeader;
