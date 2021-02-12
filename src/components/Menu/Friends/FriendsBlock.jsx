import React from "react";
import s from "./FriendsBlock.module.css";

const Friends = (props) => {
  return (
    <div className={s.item}>
      <img src="https://archilab.online/images/1/123.jpg"></img>
      <div>{props.friends}</div>
    </div>
  );
};

export default Friends;
