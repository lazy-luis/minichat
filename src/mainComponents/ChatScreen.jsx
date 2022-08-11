import React, { useState } from "react";

const ChatScreen = ({ currentUser, allMessages, setMessages }) => {
  const [userMessage, setUserMessage] = useState("");

  const createNewMessage = (e) => {
    e.preventDefault();

    const newMessage = {
      id: Math.random(),
      message: userMessage,
      user: currentUser,
    };

    const newMessageArray = [...allMessages, newMessage];

    setMessages(newMessageArray);

    localStorage.setItem("messages", JSON.stringify(newMessageArray));

    setUserMessage("");
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
        <div
          style={{
            height: "calc(64vh - 32px)",
            minHeight: "calc(64vh - 32px)",
            maxHeight: "calc(64vh - 32px)",
            background: "transparent",
            padding: "12px 50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "90%",
            overflowY: "scroll",
          }}
          id="chat-box"
        >
          {allMessages.map((message) => (
            <div
              key={message.id}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  minWidth: "100px",
                  maxWidth: "300px",
                  margin: "10px 0",
                  padding: "10px",
                  borderRadius: "5px",
                  color: "#ffffff",
                  alignSelf:
                    message.user === currentUser ? "flex-end" : "flex-start",
                  backgroundColor:
                    message.user === currentUser ? "green" : "firebrick",
                }}
              >
                <div style={{ fontSize: "12px", fontWeight: 400 }}>
                  {message.user}
                </div>
                <div style={{ fontSize: "16px", fontWeight: 600 }}>
                  {message.message}
                </div>
              </div>
            </div>
          ))}
        </div>
        <form
          style={{
            height: "6vh",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "none",
            alignItems: "center",
            justifyContent: "space-evenly",
            borderTop: "1px solid black",
            padding: "6px 0",
          }}
          onSubmit={createNewMessage}
        >
          <input
            style={{
              width: "88%",
              padding: "20px 8px",
              textAlign: "left",
            }}
            type={"text"}
            value={userMessage}
            placeholder={"Type A Message"}
            onInput={(e) => setUserMessage(e.target.value)}
          />
          <button
            style={{
              width: "8%",
              padding: "20px 8px",
              textAlign: "center",
              borderLeft: "1px solid #adadad10",
              background: "seagreen",
              borderRadius: "8px",
              color: "white",
              fontWeight: "bold",
            }}
            type={"submit"}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatScreen;
