import Footer from "../../components/molecules/Footer";
import NavbarComp from "../../components/molecules/NavbarComp";

const Layout = (props) => {
  console.log(props)
  return (
    <>
      <NavbarComp />
      <props.children />
      <Footer />
    </>
  );
};

export default Layout;
