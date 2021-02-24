import React, { FunctionComponent } from 'react';
import ReactMasonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { SRLWrapper } from 'simple-react-lightbox';
import Image from './Image';

interface IMasonryProps {
  items: Record<string, string>[];
}

const lightboxOptions = {
  buttons: {
    showDownloadButton: false,
  },
};

const Masonry: FunctionComponent<IMasonryProps> = ({ items }) => {
  return (
    <SRLWrapper options={lightboxOptions}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <ReactMasonry gutter="10px">
          {items.map((item) => (
            <Image key={item.id} image={item} alt={item.title} />
          ))}
        </ReactMasonry>
      </ResponsiveMasonry>
    </SRLWrapper>
  );
};

export default Masonry;
