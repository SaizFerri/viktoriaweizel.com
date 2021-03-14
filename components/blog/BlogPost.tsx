import { FunctionComponent } from "react";
import Image from "../Image";
import IBlogPost from "../../interfaces/blogPost.interface";
import parse from "html-react-parser";
import htmlToReactOptions from "../../utils/htmlToReactOptions";

interface IBlogPostProps {
  post: IBlogPost;
}

const BlogPost: FunctionComponent<IBlogPostProps> = ({ post }) => {
  const body = parse(post.body, htmlToReactOptions);

  return (
    <article className="blog-post">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <h1 className="blog-post__title">{post.title}</h1>
            <h5 className="blog-post__subtitle">{post.subtitle}</h5>
          </div>
        </div>
      </div>
      <div className="aspect-ratio-16x9 aspect-ratio--cover">
        <Image image={post.thumbnail} alt={post.title} />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="blog-post__body wysiwyg">{body}</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
