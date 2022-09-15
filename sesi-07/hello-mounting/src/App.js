import "./App.css";
import Clock from "./components/Clock";
import Halu from "./components/Halu";

function App() {
  return (
    <>
      <div className="App">
        {/*this clock */}
        <Clock />
        {/*this halu */}
        <Halu />
      </div>
    </>
  );
}

export default App;
