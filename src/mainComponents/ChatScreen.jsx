import React from "react";

const ChatScreen = () => {
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
          width: "50%",
          height: "70vh",
          border: "1px solid black",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ height: "64vh", background: "red", width: "100%" }}>
          Chat Screen
        </div>
        <div
          style={{
            height: "6vh",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "none",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <input
            style={{
              width: "88%",
              padding: "20px 8px",
              textAlign: "left",
              border: "1px solid #12121210",
            }}
          />
          <button
            style={{
              width: "8%",
              padding: "20px 8px",
              textAlign: "center",
              borderLeft: "1px solid #12121210",
              background: "seagreen",
              borderRadius: "8px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
