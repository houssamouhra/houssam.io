import type { NextConfig } from 'next';

type Redirects = Awaited<ReturnType<NonNullable<NextConfig['redirects']>>>;

export const redirects: Redirects = [
  {
    source: '/redirect/github',
    destination: 'https://github.com/houssamouhra',
    permanent: true,
  },
  {
    source: '/redirect/linkedin',
    destination: 'https://linkedin.com/in/houssamouhra',
    permanent: true,
  },
];
