'use client';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import { usePathname } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { WEBSITE_NAME } from '@/constants/website-name';

const Navbar = () => {
  const pathname = usePathname();

  const navigationControls =
    pathname === '/' ? (
      <div className='flex items-center text-primary select-none'>
        <span>{WEBSITE_NAME}</span>
      </div>
    ) : (
      <Link
        href='/'
        className='text-primary select-none transition-colors duration-300 hover:text-primary/80'
      >
        <div className='hidden items-center gap-1 md:flex'>
          <ChevronLeft className='h-4 w-4' />
          <span>Home</span>
        </div>
        <div className='flex items-center md:hidden'>
          <ChevronLeft className='h-4 w-4' />
        </div>
      </Link>
    );

  const currentPage =
    pathname === '/' ? null : (
      <p className='max-w-40 truncate overflow-hidden font-semibold whitespace-nowrap md:max-w-none select-none'>
        <span className='text-accent'>~</span>
        <span className='text-accent'>/</span>
        <span className='text-accent'>{pathname.slice(1)}</span>
      </p>
    );

  return (
    <nav className='fixed top-0 z-3 w-full'>
      <div className='grid w-full grid-cols-[1fr_auto_1fr] items-center p-2'>
        <div className='flex items-center'>{navigationControls}</div>
        {currentPage ? (
          <div className='flex items-center justify-self-center'>{currentPage}</div>
        ) : (
          <div />
        )}
        <div className='ml-auto flex items-center'>
          <ThemeToggle />
        </div>
      </div>
      {pathname !== '/' && <div className='h-px w-full bg-border' />}
    </nav>
  );
};

export default Navbar;
