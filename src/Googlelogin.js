import React from "react";
import myImage from "./logo.png";

const LogoComp = () => {
  return (
    <div
      style={{
        // backgroundColor: "red",
        height: 30,
        width: 30,
      }}
    >
      <img src={myImage} alt="Logo" style={{ width: "30px", height: "auto" }} />
    </div>
  );
};

const SignInComp = () => {
  return (
    <div
      style={{
        fontSize: 40,
        fontPalette: "#202124",
        paddingTop: 20,
      }}
    >
      Sign In
    </div>
  );
};

const LeftTextComp = () => {
  return (
    <div
      style={{
        fontSize: 15,
        fontPalette: "#202124",
        paddingTop: 5,
      }}
    >
      Use your Google Account
    </div>
  );
};

const EmailOrPhoneComp = () => {
  return (
    <input
      placeholder="email or phone"
      type="Email"
      style={{
        padding: 10,
        borderRadius: 5,
        width: 350,
      }}
    />
  );
};

const ForgotEmailText = () => {
  return (
    <div
      style={{
        color: "blue",
        fontSize: 14,
        paddingTop: 5,
      }}
    >
      Forgot Email?
    </div>
  );
};

const LearnMore = () => {
  return (
    <div
      style={{
        fontSize: 12,
        color: "black",
        paddingTop: 20,
      }}
    >
      Not your computer use guest mode to sign in privately. Learn More.
    </div>
  );
};

const BtnComp = () => {
  return (
    <div
      style={{
        fontSize: 16,
        color: "blue",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        justifyContent: "end",
        paddingTop: 20,
        cursor: "pointer",
      }}
    >
      Create Account
      <div
        style={{
          color: "white",
          fontSize: 16,
          borderRadius: 20,
          backgroundColor: "blue",
          paddingLeft: 10,
          paddingRight: 10,
          paddingBottom: 5,
          paddingTop: 5,
          alignContent: "center",
          cursor: "pointer",
        }}
      >
        Next
      </div>
    </div>
  );
};

function Googlelogin() {
  return (
    <div
      style={{
        backgroundColor: "#f0f4f8",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 750,
          height: 300,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          backgroundColor: "white",
          borderRadius: 15,
          padding: 30,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* column2 */}
          <LogoComp />
          <SignInComp />
          <LeftTextComp />
        </div>

        <div
          style={{
            paddingTop: "20%",
          }}
        >
          {/* column2 */}
          <EmailOrPhoneComp />
          <ForgotEmailText />
          <LearnMore />
          <BtnComp />
        </div>
      </div>
    </div>
  );
}

export default Googlelogin;
