'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Code2, Paperclip } from 'lucide-react';
import type { Project } from '@/constants/projects';
import ProjectTechnologies from '@/components/projects/ProjectTechnologies';
import { cn } from '@/lib/utils';
import styles from './project-card.module.css';

type ProjectCardProps = Project & {
  delay?: number;
};

const ProjectCard = ({
  codeLink,
  demoLink,
  delay = 0,
  description,
  technologies,
  title,
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const projectHref = `/projects/${title}`;

  useEffect(() => {
    const cardEl = cardRef.current;

    if (!cardEl) {
      return;
    }

    const handleAnimationEnd = () => {
      cardEl.classList.remove('opacity-0');
    };

    cardEl.addEventListener('animationend', handleAnimationEnd);
    return () => cardEl.removeEventListener('animationend', handleAnimationEnd);
  }, []);

  const linkClassName =
    'pointer-events-auto z-30 flex items-center gap-1.5 text-sm text-primary transition-colors duration-300 ease-in-out hover:text-primary/70';

  return (
    <div
      ref={cardRef}
      className={cn(
        'group relative h-full min-h-52 cursor-pointer overflow-hidden rounded-md border border-border bg-background opacity-0 transition-colors',
        styles['animate-up-bouncy'],
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Link
        href={projectHref}
        aria-label={`View ${title} project details`}
        className='absolute inset-0 z-10 rounded-md outline-primary focus-visible:outline-2 focus-visible:outline-offset-2'
      />
      <div className='pointer-events-none absolute inset-0 transition-colors duration-300 ease-in-out group-hover:bg-popover/80' />
      <div className='pointer-events-none relative z-20 flex h-full flex-col gap-4 p-4'>
        <p className='text-base leading-none font-semibold text-green'>{title}</p>
        <div className='pointer-events-auto relative w-max'>
          <ProjectTechnologies ptechnologies={technologies} />
        </div>
        <p className='flex-1 text-base leading-6 text-foreground'>{description}</p>
        <div className='flex flex-wrap items-center gap-3 border-t border-border pt-3'>
          {demoLink && (
            <Link href={demoLink} target='_blank' rel='noreferrer' className={linkClassName}>
              <Paperclip className='h-4 w-4' />
              <span>View demo</span>
            </Link>
          )}
          {codeLink && (
            <Link href={codeLink} target='_blank' rel='noreferrer' className={linkClassName}>
              <Code2 className='h-4 w-4' />
              <span>View code</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
