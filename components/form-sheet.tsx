'use client';

import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet';
import { useFormSheet } from '@/hooks/use-form-sheet';
import { MultiForm } from './multiform';

export const FormSheet = () => {
  const { isOpen, onClose } = useFormSheet();

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className='text-white' aria-describedby='Configure your PC'>
          <SheetTitle className='text-3xl font-bold p-4 uppercase'>Configure your PC</SheetTitle>
          <div className='h-full'>
            <MultiForm />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
