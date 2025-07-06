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
          marginTop: "20px",
          marginLeft: "20px",
          marginBottom: "20px",
          marginRight: "20px",
          borderRadius: 10,
        }}
      >
        <div
          style={{
            width: "30px",
            height: "30px",
            marginTop: "20px",
            marginLeft: "20px",
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
            color: "#202124",
            marginTop: "60px",
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            marginLeft: "20px",
            fontSize: 40,
            fontWeight: 450,
          }}
        >
          Sign in
        </div>
        <div
          style={{
            color: "#202124",
            marginTop: "120px",
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            marginLeft: "20px",
            fontSize: 15,
            fontWeight: 450,
          }}
        >
          Use your Google Account
        </div>
        <div
          style={{
            color: "#808080",
            fontSize: 20,
            height: 40,
            fontWeight: 400,
            marginTop: "100px",
            marginLeft: "350px",
            marginRight: "20px",
            border: "2px solid grey",
            backgroundColor: "white",
            borderColor: "#808080",
            borderRadius: 10,
          }}
        >
          Email or phone
        </div>
        <div
          style={{
            color: "blue",
            fontSize: 15,
            fontWeight: 400,
            marginTop: "5px",
            marginLeft: "350px",
            marginRight: "20px",
          }}
        >
          Forgot Email?
        </div>
        <div
          style={{
            color: "#808080",
            fontSize: 12,
            fontWeight: 400,
            marginTop: "40px",
            marginLeft: "350px",
            marginRight: "20px",
          }}
        >
          Not your computer? Use guest mode to sign in privately.
        </div>
        <div
          style={{
            color: "blue",
            fontSize: 16,
            fontWeight: 400,
            marginTop: "20px",
            marginLeft: "535px",
            marginRight: "20px",
          }}
        >
          Create Account
          <div
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: 450,
              marginTop: "-30px",
              marginLeft: "120px",
              marginRight: "30px",
              height: 25,
              weight: 50,
              backgroundColor: "blue",
              position: "absolute",
              paddingLeft: 20,
              paddingRight: 20,
              paddingtop: 10,
              paddingBottom: 10,
              borderRadius: 20,
            }}
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
}
