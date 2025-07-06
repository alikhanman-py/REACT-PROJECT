import logo from "./logo.svg";
import "./App.css";
import Test from "./Test";
import Googlelogin from "./Googlelogin";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* {<Test />} */}
      {<Googlelogin />}
    </div>
  );
}

export default App;
