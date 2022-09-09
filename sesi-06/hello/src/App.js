import Content from "../components/content";
import Header from "../components/header";
import Footer from "../components/footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <hr />
      <Content />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
