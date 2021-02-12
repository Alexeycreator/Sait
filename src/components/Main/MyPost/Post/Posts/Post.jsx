import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://archilab.online/images/1/123.jpg" />
      {props.messege}
      <div className={s.like}>
        <span>like</span> {props.like}
      </div>
    </div>
  );
};

export default Post;
