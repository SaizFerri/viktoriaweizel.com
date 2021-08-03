import Link from "next/link";
import React, { FunctionComponent } from "react";

interface ILinkWithIconProps {
  title: string;
  href: string;
  children: React.ReactElement | React.ReactElement[];
}

const LinkWithIcon: FunctionComponent<ILinkWithIconProps> = ({
  title,
  href,
  children,
}): React.ReactElement => {
  return (
    <Link href={href}>
      <a className="link link--icon">
        <span className="link__title">{title}</span>
        {children}
      </a>
    </Link>
  );
};

export default LinkWithIcon;
