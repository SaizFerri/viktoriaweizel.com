import { FunctionComponent } from "react";
import Link from "next/link";
import IGalleryItem from "../../interfaces/galleryItem.interface";
import Image from "../Image";

interface IGalleryListItemProps {
  item: IGalleryItem;
}

const GalleryListItem: FunctionComponent<IGalleryListItemProps> = ({
  item,
}) => {
  return (
    <Link href={`/gallery/${item.slug}`}>
      <a className="gallery-list__item">
        <Image image={item.thumbnail} alt={item.name} />
        <h4 className="gallery-list__item-title">{item.name}</h4>
      </a>
    </Link>
  );
};

export default GalleryListItem;
