import React from "react";
import myImage from "../logo.png";

const LogoComp = () => {
  return (
    <div
      style={{
        width: 40,
        height: 40,
      }}
    >
      <img src={myImage} alt="Logo" style={{ width: "40px", height: "auto" }} />
    </div>
  );
};

const SignInComp = () => {
  return (
    <div
      style={{
        color: "#202124",
        display: "flex",
        flexDirection: "column",
        fontSize: 40,
        fontWeight: 450,
      }}
    >
      Sign in
    </div>
  );
};

const UseGoogleAccount = () => {
  return (
    <div
      style={{
        color: "#202124",
        fontSize: 15,
        fontWeight: 450,
      }}
    >
      Use your Google Account
    </div>
  );
};

const EmailOrPhoneComp = () => {
  return (
    // <div
    //   // style={{
    //   //   color: "#808080",
    //   //   fontSize: 20,
    //   //   height: 40,
    //   //   fontWeight: 400,
    //   //   border: "2px solid grey",
    //   //   backgroundColor: "white",
    //   //   borderColor: "#808080",
    //   //   borderRadius: 10,
    //   //   width: 400,
    //   // }}
    // >

    //   Email or phone
    // </div>
    <input
      placeholder="Email or phone"
      type="email"
      style={{
        color: "black",
        fontSize: 20,
        height: 40,
        fontWeight: 400,
        border: "2px solid grey",
        backgroundColor: "white",
        borderColor: "#808080",
        borderRadius: 10,
        width: 400,
        paddingLeft: 10,
      }}
    />
  );
};

const ForgotEmailComp = () => {
  return (
    <div
      style={{
        color: "blue",
        fontSize: 15,
        fontWeight: 400,
        marginTop: 10,
        cursor: "pointer",
      }}
    >
      Forgot Email?
    </div>
  );
};

const NotYourComp = () => {
  return (
    <div
      style={{
        color: "#808080",
        fontSize: 12,
        fontWeight: 400,
        marginTop: 30,
      }}
    >
      Not your computer? Use guest mode to sign in privately.
    </div>
  );
};

const CreateAccounComp = () => {
  return (
    <div
      style={{
        color: "blue",
        fontSize: 16,
        fontWeight: 400,
        display: "flex",
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "end",
        gap: 10,
        alignItems: "center",
      }}
    >
      Create Account
      <div
        style={{
          color: "white",
          fontSize: 16,
          fontWeight: 450,
          backgroundColor: "blue",
          borderRadius: 20,
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 5,
          paddingBottom: 5,
          cursor: "pointer",
        }}
      >
        Next
      </div>
    </div>
  );
};

function AmmarCode() {
  return (
    <div
      style={{
        backgroundColor: "#f0f4f8",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          color: "white",
          width: 750,
          height: 300,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          backgroundColor: "white",
          borderRadius: 20,
          padding: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            gap: 10,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/*Column 1*/}
          <LogoComp />
          <SignInComp />
          <UseGoogleAccount />
        </div>

        <div style={{ paddingTop: "14%" }}>
          {/*Column 2*/}
          <EmailOrPhoneComp />
          <ForgotEmailComp />
          <NotYourComp />
          <CreateAccounComp />
        </div>
      </div>
    </div>
  );
}

export default AmmarCode;
