import { FunctionComponent, ReactChild } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
