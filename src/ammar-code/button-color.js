import axios from "axios";
import React, { use, useState } from "react";

function ButtonColor() {
  var color1 = "red";
  var color2 = " orange";
  const [color3, setcolor3] = useState("green");
  const [heightReactive, setheightReactive] = useState(20);
  const [ReactiveBoolean, setReactiveBoolean] = useState(false);

  function Button1Event() {
    console.log("Ammar");
    console.log("Color1", color1);
    color1 = "purple";
    setcolor3("purple");
    setheightReactive(30);
    console.log("Color1", color1);
    setReactiveBoolean(!ReactiveBoolean);
  }

  function WhenMouseEnters() {
    setTimeout(() => {
      setReactiveBoolean(true);
    }, 3000);
  }

  function WhenMouseLeaves() {
    setTimeout(() => {
      setReactiveBoolean(false);
    }, 3000);
  }

  const getData = async () => {
    try {
      const url = "https://ahmedreact.free.beeceptor.com";

    
      const res = await axios.get(url);

      console.log("res", res);
    } catch (error) {}
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 22,
      }}
    >
      <div
        onClick={() => Button1Event()}
        style={{
          backgroundColor: color1,
          padding: 20,
          borderRadius: 10,
          height: heightReactive,
          cursor: "pointer",
        }}
        onMouseEnter={() => WhenMouseEnters()}
        onMouseLeave={() => WhenMouseLeaves()}
      >
        color1
      </div>
      <div
        onClick={() => console.log("Ahmed")}
        style={{
          backgroundColor: color2,
          padding: 20,
          borderRadius: 10,
          height: heightReactive,

          cursor: "pointer",
        }}
      >
        color2
      </div>

      <div
        onClick={() => console.log("Ahmed")}
        style={{
          backgroundColor: color3,
          padding: 20,
          borderRadius: 10,
          height: heightReactive,

          cursor: "pointer",
        }}
      >
        color3
      </div>
      <div
        onClick={() => console.log("Ahmed")}
        style={{
          backgroundColor: color3,
          padding: 20,
          borderRadius: ReactiveBoolean == true ? 100 : 10,
          height: heightReactive,

          cursor: "pointer",
        }}
      >
        color4
      </div>
      {ReactiveBoolean == true ? (
        <div
          onClick={() => getData()}
          style={{
            backgroundColor: color3,
            padding: 20,
            borderRadius: ReactiveBoolean == true ? 100 : 10,
            height: heightReactive,

            cursor: "pointer",
          }}
        >
          color5
        </div>
      ) : null}
    </div>
  );
}

export default ButtonColor;
