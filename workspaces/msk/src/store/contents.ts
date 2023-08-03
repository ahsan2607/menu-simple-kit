import { getMenu, MenuContentProps } from '@api';
import { atom } from 'jotai';

export const menuAtom = atom<Record<string, MenuContentProps[]> | undefined>(
	getMenu()
);
