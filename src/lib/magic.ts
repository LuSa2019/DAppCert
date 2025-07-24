import { Magic } from 'magic-sdk';

const createMagic = () =>
  typeof window !== 'undefined'
    ? new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY!, {
        network: 'sepolia',
      })
    : null;

export const magic = createMagic();

export const getMagicProvider = () => magic?.rpcProvider || magic?.provider || null;
