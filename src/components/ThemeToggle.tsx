'use client';

import { Moon, Palette, Monitor, Sun } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          type='button'
          aria-label='Toggle theme'
          className='inline-flex cursor-pointer items-center justify-center text-muted-foreground transition-colors duration-200 hover:text-accent focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0'
        >
          <Palette className='h-6 w-6' />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme('light')} className='cursor-pointer'>
          <span>Light</span>
          <Sun className='ml-auto h-4 w-4 text-current' />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')} className='cursor-pointer'>
          <span>Dark</span>
          <Moon className='ml-auto h-4 w-4 text-current' />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')} className='cursor-pointer'>
          <span>System</span>
          <Monitor className='ml-auto h-4 w-4 text-current' />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;
