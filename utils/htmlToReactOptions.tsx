import Image from "../components/Image";
import { domToReact } from "html-react-parser";

const headings = ["h1", "h2", "h3", "h4", "h5"];

// \separator = 3 dots

const htmlToReactOptions = {
  replace: (node) => {
    if (
      node.type === "tag" &&
      node.children.length > 0 &&
      node.children[0].data === "\\separator"
    ) {
      return (
        <div className="separator">
          <span className="separator__item"></span>
          <span className="separator__item"></span>
          <span className="separator__item"></span>
        </div>
      );
    }

    // Paragraph after heading
    if (node.type === "tag" && node.tagName === "p") {
      if (headings.includes(node.previousSibling?.previousSibling?.name)) {
        return <p className="p-leading">{domToReact(node.children)}</p>;
      }
    }

    if (node.type === "tag" && node.tagName === "h3") {
      if (["h1", "h2"].includes(node.previousSibling?.previousSibling?.name)) {
        return <h3 className="h-leading">{domToReact(node.children)}</h3>;
      }
    }

    // Replace with next image
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

      // Style iframe
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
