import React, { useState } from "react";

function ButtonAnimate() {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);

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
      {/* Button 1 */}
      <div
        onMouseEnter={() => setHovered1(true)}
        onMouseLeave={() => setHovered1(false)}
        style={{
          backgroundColor: hovered1 ? "green" : "red",
          color: hovered1 ? "black" : "white",
          fontWeight: hovered1 ? "bold" : "normal",
          transform: hovered1 ? "scale(1.3)" : "scale(1)",
          transition: "all 0.3s ease",
          padding: 20,
          borderRadius: 10,
          cursor: "pointer",
        }}
      >
        Button 1
      </div>

      {/* Button 2 */}
      <div
        onMouseEnter={() => setHovered2(true)}
        onMouseLeave={() => setHovered2(false)}
        style={{
          backgroundColor: hovered2 ? "green" : "red",
          color: hovered2 ? "black" : "white",
          fontWeight: hovered2 ? "bold" : "normal",
          transform: hovered2 ? "scale(1.3)" : "scale(1)",
          transition: "all 0.3s ease",
          padding: 20,
          borderRadius: 10,
          cursor: "pointer",
        }}
      >
        Button 2
      </div>

      {/* Button 3 */}
      <div
        onMouseEnter={() => setHovered3(true)}
        onMouseLeave={() => setHovered3(false)}
        style={{
          backgroundColor: hovered3 ? "green" : "red",
          color: hovered3 ? "black" : "white",
          fontWeight: hovered3 ? "bold" : "normal",
          transform: hovered3 ? "scale(1.3)" : "scale(1)",
          transition: "all 0.3s ease",
          padding: 20,
          borderRadius: 10,
          cursor: "pointer",
        }}
      >
        Button 3
      </div>
    </div>
  );
}

export default ButtonAnimate;
