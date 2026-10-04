'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { RiGithubLine, RiLinkedinBoxFill } from '@remixicon/react';
import { Mail, Webhook, FileUser } from 'lucide-react';
import { ActionTooltip } from '@/components/ActionTooltip';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import styles from './page.module.css';

const buttons = [
  {
    label: 'contact me',
    href: null,
    icon: Mail,
    iconClassName: 'mail',
    cardClassName: 'bg-teal text-background hover:bg-teal/80',
    delay: '800ms',
  },
  {
    label: 'projects',
    href: '/projects',
    icon: Webhook,
    iconClassName: 'icon',
    cardClassName: 'bg-accent text-background hover:bg-accent/80',
    delay: '1000ms',
  },
  {
    label: 'resume',
    href: '/resume',
    icon: FileUser,
    iconClassName: 'resume',
    cardClassName: 'bg-warm text-background hover:bg-warm/80',
    delay: '1200ms',
  },
] as const;

const socials = [
  {
    label: 'github',
    href: 'https://github.com/houssamouhra',
    icon: RiGithubLine,
  },
  {
    label: 'linkedin',
    href: 'https://www.linkedin.com/in/houssamouhra',
    icon: RiLinkedinBoxFill,
  },
] as const;

const HomeContent = () => {
  const [animationState, setAnimationState] = useState<'pending' | 'animate' | 'idle'>('pending');

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('visited');
    const frameId = window.requestAnimationFrame(() => {
      if (hasVisited) {
        setAnimationState('idle');
        return;
      }

      sessionStorage.setItem('visited', 'true');
      setAnimationState('animate');
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('contact@houssam.io');
      toast.success('Email copied');
    } catch {
      toast.error("Couldn't copy email");
    }
  };

  const shouldAnimate = animationState === 'animate';
  const isPending = animationState === 'pending';

  return (
    <>
      <main className='grid h-screen w-full place-items-center overflow-hidden'>
        <div className='grid h-max grid-flow-row place-items-center gap-2 pb-[5%]'>
          <div
            className={cn(
              'grid grid-cols-[repeat(3,max-content)] place-items-center gap-2',
              isPending && styles['pre-fade-in-down'],
              shouldAnimate && styles['fade-in-down'],
            )}
          >
            <span
              aria-hidden='true'
              className={cn('text-2xl select-none md:text-4xl', styles['wave-animation'])}
              style={{ animationDelay: '1800ms' }}
            >
              👋
            </span>
            <span />
            <span className='text-2xl select-none md:text-4xl'>
              Hi! I&apos;m <span className={styles['special-text']}>Houssam Ouhra</span>
            </span>
          </div>

          <div className='grid w-full grid-flow-row place-content-center gap-2 pt-4 sm:grid-flow-col'>
            {buttons.map(({ label, href, icon: Icon, iconClassName, cardClassName, delay }) => {
              const card = (
                <div
                  className={cn(
                    'grid grid-cols-[max-content_max-content] place-items-center gap-1 rounded-md p-2 duration-300 ease-in-out',
                    cardClassName,
                  )}
                >
                  <Icon className={cn('h-4 w-4', styles[iconClassName])} />
                  <span>{label}</span>
                </div>
              );

              return (
                <div
                  key={label}
                  className={cn(
                    'z-10 w-full',
                    isPending && styles['pre-bouncing-animation'],
                    shouldAnimate && styles['bouncing-animation'],
                  )}
                  style={{ animationDelay: delay }}
                >
                  {href ? (
                    <Link
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noreferrer' : undefined}
                      className={cn(
                        'block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                        styles.button,
                      )}
                      aria-label={label}
                    >
                      {card}
                    </Link>
                  ) : (
                    <button
                      type='button'
                      onClick={copyEmail}
                      className={cn(
                        'block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                        styles.button,
                      )}
                      aria-label={label}
                    >
                      {card}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <footer className='fixed bottom-0 z-20 w-full'>
        <div className='grid place-items-center px-4 py-2'>
          <div className='grid w-max grid-flow-col place-items-center gap-2'>
            {socials.map(({ label, href, icon: Icon }) => (
              <ActionTooltip key={label} label={label}>
                <Link
                  href={href}
                  target='_blank'
                  rel='noreferrer'
                  className='cursor-pointer'
                  aria-label={label}
                >
                  <Icon className='h-6 w-6 text-primary transition-colors hover:text-primary/70' />
                </Link>
              </ActionTooltip>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomeContent;
