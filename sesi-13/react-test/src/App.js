import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
// bootstrap

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
