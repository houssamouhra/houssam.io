import ThemeToggle from '@/components/ThemeToggle';

const Navbar = () => {
  return (
    <nav className='fixed grid w-full grid-cols-2 items-center p-2'>
      <div className='text-primary select-none'>houssam.io</div>
      <div className='ml-auto'>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
