import React, { FunctionComponent } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import Card from "../cards/Card";

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
  const CardBody = () => {
    const formatedDate = format(new Date(createdOn), "dd MMMM yyyy", {
      locale: de,
    });
    return (
      <>
        <div className="blog-card__title">
          <Link href={`/blog/${slug}`}>
            <a className="clean d-block">
              <h3 className="card__title">{title}</h3>
            </a>
          </Link>
          <small className="blog-card__date">{formatedDate}</small>
        </div>
        <p className="card__teaser">{subtitle}</p>
      </>
    );
  };

  const CardFooter = () => (
    <>
      <Link href={`/blog/${slug}`}>
        <a className="button">Read more</a>
      </Link>
    </>
  );

  return (
    <Card
      classNames="blog-card"
      thumbnail={thumbnail}
      body={<CardBody />}
      footer={<CardFooter />}
    />
  );
};

export default BlogCard;
