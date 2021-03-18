import { FunctionComponent, ReactChild } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface ILayoutProps {
  children: ReactChild | ReactChild[];
}

const Layout: FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
