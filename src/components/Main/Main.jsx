import React from "react";
import s from "./Main.module.css";
import MyPost from "./MyPost/Post/MyPost";
import MainInformation from "./MainInformation/MainInformation";

const Main = (props) => {
  return (
    <div>
      <MainInformation />
      <div className={s.mainContent}>
        <MyPost postData={props.basis.postData} 
                newTextPosts = {props.newTextPosts}
                updatePostText={props.updatePostText}
                addPost={props.addPost} />
      </div>
    </div>
  );
};

export default Main;
