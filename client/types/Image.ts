import { StaticImageData } from 'next/image';

type ImageSources = 'desktop' | 'mobile';

export type Image = {
  src: Record<ImageSources, StaticImageData>;
  altText: string;
};
