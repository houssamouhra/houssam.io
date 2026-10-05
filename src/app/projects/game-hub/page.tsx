import ShowcaseGap from '@/components/showcase/ShowcaseGap';
import ShowcaseImage from '@/components/showcase/ShowcaseImage';
import ShowcaseFeatures from '@/components/showcase/ShowcaseFeatures';
import PageContainer from '@/components/PageContainer';
import ProjectHeader from '@/components/projects/ProjectHeader';
import { getProject } from '@/constants/projects';
import gamehubShowcase from '../../../../public/assets/projects/game-hub/showcase.png';

const GamehubProjectPage = () => {
  const project = getProject('game-hub');

  const features = [
    'Browse trending and popular games',
    'Infinite scrolling game discovery experience',
    'Search games by title',
    'Filter by genre, platform, and sort order',
    'Detailed game pages with ratings, metadata, screenshots, and trailers',
    'Responsive layout for desktop and mobile',
    'Seamless client-side routing with React Router',
    'Data fetching, caching, and background refetching with React Query',
    'Global filter state management with Zustand',
    'Persistent UI state across sessions',
    'Automatic scroll-to-top behavior on filter changes and resets',
    'Loading skeletons for improved perceived performance',
    'Dark/light theme toggle with persistent preference',
    'Robust error handling for API failures',
  ];

  return (
    <PageContainer>
      <ProjectHeader project={project} />
      <ShowcaseImage src={gamehubShowcase} alt='game-hub showcase' />

      <p className='text-lg leading-relaxed text-muted-foreground'>
        A modern game discovery web app for browsing, searching, and filtering video games with a
        clean responsive UI powered by the RAWG API.
      </p>

      <ShowcaseGap />

      <ShowcaseFeatures features={features} columns={2} />
    </PageContainer>
  );
};

export default GamehubProjectPage;
