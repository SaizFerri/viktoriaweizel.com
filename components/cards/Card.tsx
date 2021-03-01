import { FunctionComponent } from "react";
import DIRECTUS_URL from "../../consts/directusBaseUrl";

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
        <div
          className="card__image"
          style={{
            backgroundImage: `url(${DIRECTUS_URL}/assets/${thumbnail.id})`,
          }}
        ></div>
      </div>
      <div className="card__body">{body}</div>
      <div className="card__footer">{footer}</div>
    </article>
  );
};

export default Card;
