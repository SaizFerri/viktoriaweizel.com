import React, { FunctionComponent, ReactChild } from "react";
import ReactMasonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

interface IMasonryProps {
  children: ReactChild | ReactChild[];
  classNames?: string;
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
  classNames = "",
  gutter = "0.5rem",
  columnsCountBreakPoints = defaultColumnsCountBreakPoints,
  lightboxOptions = defaultLightboxOptions,
  withLightbox = false,
}) => {
  const MansoryContent = () => (
    <div className={classNames}>
      <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
        <ReactMasonry gutter={gutter}>{children}</ReactMasonry>
      </ResponsiveMasonry>
    </div>
  );

  if (withLightbox) {
    return (
      <SimpleReactLightbox>
        <SRLWrapper options={lightboxOptions}>
          <MansoryContent />
        </SRLWrapper>
      </SimpleReactLightbox>
    );
  }

  return <MansoryContent />;
};

export default Masonry;
