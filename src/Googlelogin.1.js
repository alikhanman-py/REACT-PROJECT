import myImage from "./logo.png";

export default function Googlelogin() {
  return (
    <div
      style={{
        backgroundColor: "#f0f4f8",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          color: "white",
          width: "750px",
          height: "300px",
          padding: 10,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          backgroundColor: "white",
          borderRadius: 10,
        }}
      >
        <div
          style={{
            width: "30px",
            height: "30px",
            padding: "10px",
            position: "absolute",
          }}
        >
          <img
            src={myImage}
            alt="Logo"
            style={{ width: "40px", height: "auto" }}
          />
        </div>
        <div
          style={{
            color: "#000000",
            fontSize: 50,
            fontWeight: 700,
            padding: 50,
          }}
        >
          Ahmed
        </div>
      </div>
    </div>
  );
}
