import React, { FunctionComponent, ReactChild } from 'react';
import ReactMasonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { SRLWrapper } from 'simple-react-lightbox';

interface IMasonryProps {
  children: ReactChild | ReactChild[];
  gutter?: string;
  columnsCountBreakPoints?: Record<number, number>;
  lightboxOptions?: Record<string, any>;
  withLightbox?: boolean;
}

const defaultColumnsCountBreakPoints = {
  350: 1,
  750: 2,
  900: 3,
};

const defaultLightboxOptions = {
  buttons: {
    showDownloadButton: false,
  },
};

const Masonry: FunctionComponent<IMasonryProps> = ({
  children,
  gutter = '0.5rem',
  columnsCountBreakPoints = defaultColumnsCountBreakPoints,
  lightboxOptions = defaultLightboxOptions,
  withLightbox = false,
}) => {
  const MansoryContent = () => (
    <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
      <ReactMasonry gutter={gutter}>{children}</ReactMasonry>
    </ResponsiveMasonry>
  );

  if (withLightbox) {
    return (
      <SRLWrapper options={lightboxOptions}>
        <MansoryContent />
      </SRLWrapper>
    );
  }

  return <MansoryContent />;
};

export default Masonry;
