import { Separator } from '@/components/Separator';

interface ShowcaseHeaderProps {
  title: string;
}

const ShowcaseHeader = ({ title }: ShowcaseHeaderProps) => {
  return (
    <>
      <a href={`#${title}`} id={title}>
        <span className='text-lg font-semibold'># {title}</span>
      </a>
      <Separator orientation='horizontal' className='mb-2' />
    </>
  );
};

export default ShowcaseHeader;
