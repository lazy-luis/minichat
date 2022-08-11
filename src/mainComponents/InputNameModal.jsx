import React, { useState } from "react";

const InputNameModal = ({ userLogin, acceptUser }) => {
  const [userName, setUserName] = useState("");

  const loginUser = () => {
    userLogin(true);
    acceptUser(userName);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "30%",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: "32px", margin: "20px auto", color: "#453454" }}>
          Welcome To MiniChat
        </h3>
        <input
          type={"text"}
          value={userName}
          placeholder={"Enter A Username"}
          onInput={(e) => setUserName(e.target.value)}
          style={{
            display: "block",
            width: "70%",
            margin: "20px auto",
            border: "1px solid black",
            borderRadius: "5px",
            padding: "15px 10px",
            fontSize: 16,
            textAlign: "center",
            fontWeight: "bold",
            color: "#808989",
          }}
        />
        <button
          style={{
            backgroundColor: "seagreen",
            color: "white",
            padding: "15px 10px",
            margin: "20px auto",
            fontWeight: 700,
            display: "block",
            width: "40%",
            borderRadius: "5px",
          }}
          onClick={loginUser}
        >
          LOG IN
        </button>
      </div>
    </div>
  );
};

export default InputNameModal;
