import { FunctionComponent, ReactChild } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface ILayoutProps {
  children: ReactChild | ReactChild[];
  classNames?: string;
}

const Layout: FunctionComponent<ILayoutProps> = ({
  children,
  classNames = "",
}) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={classNames}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
