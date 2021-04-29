import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "../firebase";
import "./Sidebarchat.css";

function Sidebarchat({ id, name, addNewChat }) {
  const createChat = () => {
    const roomname = prompt("Please enter the name for chat");

    if (roomname) {
      // do some crazy stuff here
      db.collection("rooms").add({
        name: roomname,
      });
    }
  };
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="Sidebarchat">
        <Avatar src={`https://avatars.dicebear.com/api/micah/${seed}.svg`} />
        <div className="Sidebar__chatinfo">
          <h2>{name}</h2>
          <p>This is the last message in the room</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="Sidebarchat">
      <h2>Add New Chat</h2>
    </div>
  );
}

export default Sidebarchat;
