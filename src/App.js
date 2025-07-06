import logo from "./logo.svg";
import "./App.css";
import Test from "./Test";
import Googlelogin from "./Googlelogin";
import AmmarCode from "./ammar-code/AmmarCode";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* {<Test />} */}
      {/* {<Googlelogin />} */}
      <AmmarCode/>
    </div>
  );
}

export default App;
