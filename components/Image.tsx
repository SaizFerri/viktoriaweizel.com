import React, { FunctionComponent } from "react";
import NextImage from "next/image";
import DIRECTUS_URL from "../consts/directusBaseUrl";
interface IImageProps {
  image: Record<string, any>;
  alt: string;
  classNames?: string;
}

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
