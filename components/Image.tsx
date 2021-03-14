import { FunctionComponent } from "react";
import NextImage from "next/image";
import DIRECTUS_URL from "../consts/directusBaseUrl";
interface IImageProps {
  url?: string;
  image: Record<string, any>;
  alt: string;
  classNames?: string;
}

const Image: FunctionComponent<IImageProps> = ({
  url,
  image,
  alt,
  classNames,
}) => {
  return (
    <NextImage
      src={url || `${DIRECTUS_URL}/assets/${image.id}`}
      width={image.width}
      height={image.height}
      alt={alt}
      className={classNames}
    />
  );
};

export default Image;
