import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebarchat.css";

function Sidebarchat() {
  return (
    <div className="Sidebarchat">
      <Avatar />
      <div className="Sidebar__chatinfo">
        <h2>This is the room Name</h2>
        <p>This is the last message in the room</p>
      </div>
    </div>
  );
}

export default Sidebarchat;
