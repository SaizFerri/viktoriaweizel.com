import { FunctionComponent } from "react";

interface ICardProps {
  classNames: string;
  image: JSX.Element;
  body: JSX.Element;
  footer: JSX.Element;
}

const Card: FunctionComponent<ICardProps> = ({
  classNames = "",
  image,
  body,
  footer,
}) => {
  return (
    <article className={`card ${classNames}`}>
      <div className="card__header">
        <div className="card__image">{image}</div>
      </div>
      <div className="card__body">{body}</div>
      <div className="card__footer">{footer}</div>
    </article>
  );
};

export default Card;
