import React, { FunctionComponent } from 'react';
import GalleryListItem from './GalleryListItem';
import IGalleryItem from '../../interfaces/galleryItem.interface';
import Masonry from '../Masonry';

interface IGalleryListProps {
  items: IGalleryItem[];
}

const GalleryList: FunctionComponent<IGalleryListProps> = ({ items }) => {
  if (!items) {
    return <h2>Empty gallery</h2>;
  }

  return (
    <Masonry>
      {items.map((item) => (
        <GalleryListItem key={item.slug} item={item} />
      ))}
    </Masonry>
  );
};

export default GalleryList;
