import ShowcaseGap from '@/components/showcase/ShowcaseGap';
import ShowcaseImage from '@/components/showcase/ShowcaseImage';
import ShowcaseFeatures from '@/components/showcase/ShowcaseFeatures';
import PageContainer from '@/components/PageContainer';
import ProjectHeader from '@/components/projects/ProjectHeader';
import { getProject } from '@/constants/projects';
import gamehubShowcase from '../../../../public/assets/projects/issue-tracker/showcase.png';

const IssuetrackerProjectPage = () => {
  const project = getProject('issue-tracker');

  const features = [
    'Create, view, update, and delete issues',
    'User authentication and authorization',
    'Assign issues to users',
    'Sort issues by relevant fields',
    'Filter issues by status',
    'Paginate issue listings',
    'Dashboard with issue statistics and insights',
  ];

  return (
    <PageContainer>
      <ProjectHeader project={project} />
      <ShowcaseImage src={gamehubShowcase} alt='game-hub showcase' />

      <p className='text-lg leading-relaxed text-muted-foreground'>
        A modern full-stack issue tracker for managing and tracking software development issues.
      </p>

      <ShowcaseGap />

      <ShowcaseFeatures features={features} columns={2} />
    </PageContainer>
  );
};

export default IssuetrackerProjectPage;
