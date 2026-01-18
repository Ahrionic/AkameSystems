import { Cpu, Gauge, Headphones, Ribbon, ShieldCheck, Wrench } from 'lucide-react';

export const FEATURE_CARDS = [
  {
    icon: Cpu,
    title: 'Premium Components',
    description: 'Only top-tier parts from trusted brands.',
  },
  {
    icon: Wrench,
    title: 'Expert Assembly',
    description: 'Meticulous cable management and optimal airflow for peak performance.',
  },
  {
    icon: ShieldCheck,
    title: '2-Year Warranty',
    description: 'Comprehensive coverage on all builds with dedicated support.',
  },
  {
    icon: Gauge,
    title: 'Stress Tested',
    description: 'Every system undergoes 48-hour stress testing before shipping.',
  },
  {
    icon: Headphones,
    title: 'Lifetime Support',
    description: 'Free technical support and upgrade consultations for life.',
  },
  {
    icon: Ribbon,
    title: 'RGB Mastery',
    description: 'Custom lighting profiles synchronized acress all components.',
  },
] as const;
