import { StaticImageData } from 'next/image';

export interface SectionType {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
}
