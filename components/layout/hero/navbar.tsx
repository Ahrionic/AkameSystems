import Image from 'next/image';

export const Navbar = () => {
  return (
    <nav className='bg-transparent flex items-center h-14 sm:h-16'>
      <div className='shrink-0'>
        <Image
          src='/images/akame2.png'
          alt='Akame Systems Logo'
          width={400}
          height={133}
          className='md:h-12 h-6 w-auto'
          priority
        />
      </div>
    </nav>
  );
};
