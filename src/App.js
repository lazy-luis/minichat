import { useEffect, useState } from "react";
import "./App.css";
import ChatScreen from "./mainComponents/ChatScreen";
import InputNameModal from "./mainComponents/InputNameModal";

const App = () => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [userName, setUserName] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messages = localStorage.messages
      ? JSON.parse(localStorage.messages)
      : null;
    if (messages) {
      setMessages(messages);
    } else {
      localStorage.setItem("messages", JSON.stringify([]));
      setMessages([]);
    }

    const checkLocalMessages = () => {
      const messagess = localStorage.messages
        ? JSON.parse(localStorage.messages)
        : [];
      if (messagess.length > messages.length) {
        setMessages(messagess);
      }
    };

    window.setInterval(checkLocalMessages, 1000);
  }, []);

  return isUserLogged ? (
    <ChatScreen
      currentUser={userName}
      allMessages={messages}
      setMessages={setMessages}
    />
  ) : (
    <InputNameModal userLogin={setIsUserLogged} acceptUser={setUserName} />
  );
};

export default App;
