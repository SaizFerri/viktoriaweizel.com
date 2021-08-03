import { FunctionComponent } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import DIRECTUS_URL from "../../consts/directusBaseUrl";

interface IBlogCardProps {
  thumbnail: Record<string, string | number>;
  title: string;
  createdOn: string;
  subtitle?: string;
  slug: string;
}

const BlogCard: FunctionComponent<IBlogCardProps> = ({
  thumbnail,
  title,
  createdOn,
  subtitle,
  slug,
}) => {
  const backgroundImage = `
    linear-gradient(180deg, rgba(26, 26, 26, 0) 0%, rgba(26, 26, 26, 0.62) 49.48%, #1A1A1A 100%),
    url(${DIRECTUS_URL}/assets/${thumbnail.id})
  `;
  const formatedDate = format(new Date(createdOn), "dd MMMM yyyy", {
    locale: de,
  });

  return (
    <Link href={`/blog/${slug}`}>
      <div
        className="blog-card"
        style={{
          backgroundImage: backgroundImage,
        }}
      >
        <small className="blog-card__date">{formatedDate}</small>
        <h4 className="blog-card__title">{title}</h4>
        <p className="card__subtitle">{subtitle}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
