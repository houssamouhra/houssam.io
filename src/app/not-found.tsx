import Link from 'next/link';

const NotFound = () => {
  return (
    <main className='grid min-h-[calc(100vh-4rem)] place-items-center px-6'>
      <div className='text-foreground space-y-2 text-center text-base md:text-lg'>
        <p className='text-teal'>404</p>
        <p>Page not found</p>
        <Link
          href='/'
          className='inline-block text-primary duration-300 ease-in-out hover:text-primary/80'
        >
          Return home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
