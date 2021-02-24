import React, { FunctionComponent } from 'react';
import NextImage from 'next/image';

interface IImageProps {
  image: Record<string, any>;
  alt: string;
  classNames?: string;
}

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL;

const Image: FunctionComponent<IImageProps> = ({ image, alt, classNames }) => {
  return (
    <NextImage
      src={`${DIRECTUS_URL}/assets/${image.id}`}
      width={image.width}
      height={image.height}
      alt={alt}
      className={classNames}
    />
  );
};

export default Image;
