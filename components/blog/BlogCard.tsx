import React, { FunctionComponent } from "react";
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
}) => {
  const CardBody = () => (
    <>
      <h4 className="card__title">{title}</h4>
      <small>{createdOn}</small>
      <p>{subtitle}</p>
    </>
  );

  const CardFooter = () => (
    <>
      <button>Read more</button>
    </>
  );

  return (
    <Card thumbnail={thumbnail} body={<CardBody />} footer={<CardFooter />} />
  );
};

export default BlogCard;
