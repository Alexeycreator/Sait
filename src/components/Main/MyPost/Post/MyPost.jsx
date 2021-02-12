import React from "react";
import s from "./MyPost.module.css";
import Post from "./Posts/Post";

const MyPost = (props) => {
  let postElements = props.postData.map((p) => (
    <Post messege={p.messege} like={p.likes} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onChangePostNew = () =>{
    let text = newPostElement.current.value;
    props.updatePostText(text);
  }

  return (
    <div className={s.mainContent}>
      <div>Мой пост</div>
      <div>
        <textarea onChange={onChangePostNew} ref={newPostElement} value={props.newTextPosts} />
      </div>
      <div>
        <button onClick={addPost}>Добавить пост</button>
      </div>  
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default MyPost;
