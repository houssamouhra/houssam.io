import { Palette } from 'lucide-react';

const NavBar = () => {
  return (
    <nav className='fixed grid w-full grid-cols-2 items-center p-2'>
      <div className='text-primary select-none'>houssam.io</div>
      <div className='ml-auto'>
        <Palette />
      </div>
    </nav>
  );
};

export default NavBar;
