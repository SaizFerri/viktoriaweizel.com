import Image from "../components/Image";
import { domToReact } from "html-react-parser";

const htmlToReactOptions = {
  replace: (node) => {
    if (node.children && node.children.length === 1) {
      if (node.children[0].name === "img") {
        const { attribs } = node.children[0];
        return replaceNativeImgWithNextImg({
          src: attribs.src,
          alt: attribs.alt,
          width: attribs.width,
          height: attribs.height,
        });
      }

      if (node.children[0].name === "iframe") {
        return (
          <div className="wysiwyg-iframe">{domToReact(node.children)}</div>
        );
      }
    }
  },
};

const replaceNativeImgWithNextImg = ({ src, alt, width, height }) => {
  return (
    <figure className="wysiwyg-image">
      <Image url={src} alt={alt} image={{ width: width, height: height }} />
      <figcaption dangerouslySetInnerHTML={{ __html: alt }}></figcaption>
    </figure>
  );
};

export default htmlToReactOptions;
