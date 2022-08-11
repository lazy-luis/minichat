import { useEffect, useState } from "react";
import "./App.css";
import ChatScreen from "./mainComponents/ChatScreen";
import InputNameModal from "./mainComponents/InputNameModal";

const App = () => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [userName, setUserName] = useState("");
  const [Allmessages, setMessages] = useState([]);

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
      if (JSON.parse(localStorage.messages).length > Allmessages.length) {
        setMessages(JSON.parse(localStorage.messages));
      }
      document.getElementById("chat-box") !== null &&
        (document.getElementById("chat-box").scrollTop =
          document.getElementById("chat-box").scrollHeight);
    };

    window.setInterval(checkLocalMessages, 2000);
  }, []);

  return isUserLogged ? (
    <ChatScreen
      currentUser={userName}
      allMessages={Allmessages}
      setMessages={setMessages}
    />
  ) : (
    <InputNameModal userLogin={setIsUserLogged} acceptUser={setUserName} />
  );
};

export default App;
