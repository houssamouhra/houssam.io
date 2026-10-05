interface ShowcaseFeaturesProps {
  title?: string;
  features: string[];
  columns?: 1 | 2 | 3;
}

const ShowcaseFeatures = ({ title = 'Features', features, columns = 2 }: ShowcaseFeaturesProps) => {
  return (
    <section className='w-full'>
      {title && (
        <h3 className='mb-5 text-sm font-medium tracking-widest text-muted-foreground uppercase'>
          {title}
        </h3>
      )}

      <ul
        className={`
          grid gap-x-8 gap-y-3
          ${columns === 1 ? 'grid-cols-1' : ''}
          ${columns === 2 ? 'grid-cols-1 sm:grid-cols-2' : ''}
          ${columns === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : ''}
        `}
      >
        {features.map((feature) => (
          <li
            key={feature}
            className='group flex items-start gap-3 text-base leading-relaxed text-foreground'
          >
            <span className='mt-2.25 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70 transition-colors group-hover:bg-primary' />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShowcaseFeatures;
