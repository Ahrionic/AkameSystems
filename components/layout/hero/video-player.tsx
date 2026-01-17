type Props = {
  src: string;
  poster?: string;
};

export const VideoPlayer = ({ src, poster }: Props) => {
  return (
    <>
      <div className='absolute inset-0 -z-10 pointer-events-none bg-black/25' />
      <div
        className='absolute inset-0 -z-10 pointer-events-none'
        style={{
          background:
            'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.5) 60%, transparent 100%)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          maskImage: 'linear-gradient(to top, black 0%, black 40%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 0%, black 40%, transparent 100%)',
        }}
      />
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
        className='absolute inset-0 w-full h-full object-cover -z-20 -scale-x-100'
      >
        <source src={src} type='video/mp4' />
      </video>
    </>
  );
};
