'use client';

import { create } from 'zustand';

type FormSheetState = {
  isOpen: boolean;

  onOpen: () => void;
  onClose: () => void;
};

export const useFormSheet = create<FormSheetState>(set => ({
  isOpen: false,

  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
