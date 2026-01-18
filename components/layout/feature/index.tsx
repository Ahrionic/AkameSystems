'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { FEATURE_CARDS } from '@/lib/data';

import { FeatureCard } from './feature-card';

gsap.registerPlugin(ScrollTrigger);

export const Feature = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = containerRef.current?.querySelectorAll('.feature-card');
      if (!cards) return;

      gsap.set(cards, { y: 60, opacity: 0 });

      const mm = gsap.matchMedia();

      // Desktop (lg): 3 columns - stagger by rows
      mm.add('(min-width: 1024px)', () => {
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.2,
          stagger: {
            amount: 0.4,
            grid: [2, 3],
            axis: 'y',
            from: 'start',
          },
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true,
          },
        });
      });

      // Mobile/Tablet: one at a time
      mm.add('(max-width: 1023px)', () => {
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.2,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true,
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className='mx-auto px-5 md:px-20 pt-12'>
      <h1 className='text-2xl md:text-5xl font-semibold text-center'>
        Why Choose <span className='text-red-900'>Us</span>
      </h1>
      <p className='text-muted-foreground text-center text-sm text-pretty md:text-lg mt-5'>
        We don't just build computers - we craft experiences where every detail matters.
      </p>
      <div className='mt-5 pb-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {FEATURE_CARDS.map(card => (
            <FeatureCard key={card.title} icon={card.icon} title={card.title} description={card.description} />
          ))}
        </div>
      </div>
    </section>
  );
};
