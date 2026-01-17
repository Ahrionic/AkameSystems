import { LucideIcon } from 'lucide-react';

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const FeatureCard = ({ icon: Icon, title, description }: Props) => {
  return (
    <div className='feature-card group relative w-auto rounded-xs border border-white/10 bg-black/60 p-4 md:p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-black/70'>
      <div className='absolute inset-0 -z-10 rounded-xl bg-linear-to-br from-red-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />

      <div className='flex flex-col items-center justify-center gap-4 text-center'>
        <div className='flex md:flex-col items-center justify-center gap-4'>
          <div className='flex size-12 items-center justify-center rounded-lg border border-white/10 bg-white/5'>
            <Icon className='size-6 text-red-500' />
          </div>
          <h3 className='md:text-lg text-sm font-semibold tracking-wide text-white'>{title}</h3>
        </div>
        <p className='md:text-sm text-xs leading-relaxed text-muted-foreground'>{description}</p>
      </div>
    </div>
  );
};
