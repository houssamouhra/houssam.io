import type { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <main className='grid grid-flow-row mx-auto m-20 w-[90%] md:mb-60 lg:w-[60%] xl:w-[40%]'>
      {children}
    </main>
  );
};

export default PageContainer;
