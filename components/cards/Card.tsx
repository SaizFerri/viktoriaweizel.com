import { FunctionComponent } from "react";
import Image from "../Image";

interface ICardProps {
  classNames: string;
  thumbnail: Record<string, string | number>;
  body: JSX.Element;
  footer: JSX.Element;
}

const Card: FunctionComponent<ICardProps> = ({
  classNames = "",
  thumbnail,
  body,
  footer,
}) => {
  return (
    <article className={`card ${classNames}`}>
      <div className="card__header">
        <div className="card__image">
          <div className="aspect-ratio-4x3 aspect-ratio--cover">
            <Image image={thumbnail} alt={"thumbnail.title"} />
          </div>
        </div>
      </div>
      <div className="card__body">{body}</div>
      <div className="card__footer">{footer}</div>
    </article>
  );
};

export default Card;
