import Footer from "../../components/molecules/Footer";
import NavbarComp from "../../components/molecules/NavbarComp";

const Layout = (props) => {
  return (
    <>
      <NavbarComp />
      <props.children />
      <Footer />
    </>
  );
};

export default Layout;
