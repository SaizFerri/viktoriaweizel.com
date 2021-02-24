import React, { FunctionComponent, ReactChild } from 'react';

interface ILayoutProps {
  head: FunctionComponent;
  children: ReactChild | ReactChild[];
}

const Layout: FunctionComponent<ILayoutProps> = ({ head, children }) => {
  const Head = head;
  return (
    <>
      <Head />
      <header>
        <nav>Navigation</nav>
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
