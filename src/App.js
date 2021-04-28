import react from "react";
import "./App.css";
import Chat from "./chat/Chat";
import Sidebar from "./sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
