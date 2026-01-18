'use client';

import { ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import SplitText from '@/components/SplitText';

import { useFormSheet } from '@/hooks/use-form-sheet';

import { Navbar } from './navbar';
import { VideoPlayer } from './video-player';

export const Hero = () => {

  const { onOpen } = useFormSheet();
  return (
    <header className='relative h-screen w-full overflow-hidden'>
      <div className='mx-auto px-4 md:px-20 md:pt-12 pt-8 text-white flex flex-col h-full'>
        <Navbar />
        <section className='flex flex-col flex-1 pt-20 justify-between'>
          <div className='md:text-[5rem] text-[3.5rem] font-bold text-pretty leading-tight text-left w-full'>
            <SplitText text='CREATE YOUR' tag='h1' className='block!' textAlign='left' splitType='chars' delay={30} />
            <SplitText text='DREAM' tag='h1' className='block!' textAlign='left' splitType='chars' delay={30}  />
            <SplitText text='PC' tag='h1' className='block!' textAlign='left' splitType='chars' delay={45} />
          </div>
          <div className='flex flex-col gap-4 md:items-start pb-20'>
            <p className='w-fit text-left uppercase'>
              <span className='block'>premium pc builds.</span>
              <span className='block'>crafted to your needs.</span>
              <span className='block'>tailored to your aesthetic.</span>
              <span className='block'>personalized for you.</span>
            </p>
            <Button className='w-fit' onClick={onOpen}>
              configure your pc <ChevronRight className='size-4' />
            </Button>
          </div>
        </section>
      </div>

      <VideoPlayer src='/hero.mp4' poster='/images/poster.png' />
    </header>
  );
};
