'use client';

import { FormSheet } from '@/components/form-sheet';
import { useMountedState } from 'react-use';

export const SheetProvider = () => {
  const isMounted = useMountedState();

  if (!isMounted) return null;

  return <FormSheet />;
};
