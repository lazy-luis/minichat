import { useState } from "react";
import "./App.css";
import ChatScreen from "./mainComponents/ChatScreen";
import InputNameModal from "./mainComponents/InputNameModal";

const App = () => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [userName, setUserName] = useState("");

  return isUserLogged ? (
    <ChatScreen currentUser={userName} />
  ) : (
    <InputNameModal userLogin={setIsUserLogged} acceptUser={setUserName} />
  );
};

export default App;
