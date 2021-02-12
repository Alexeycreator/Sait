import { redrawPage } from "../Redraw";

let basis = {
  dialogsPage: {
    dialogsData: [
      { id: 1, name: "Andrew" },
      { id: 2, name: "Alex" },
      { id: 3, name: "Denis" },
      { id: 4, name: "Ksusha" },
    ],
    messegeData: [
      { id: 1, messege: "Hi" },
      { id: 2, messege: "how are you?" },
      { id: 3, messege: "ok" },
    ],
  },
  mainPage: {
    postData: [
      { id: 1, messege: "Привет, как твои дела?", likes: 19 },
      { id: 2, messege: "Привет, все хорошо - это мой первый пост", likes: 29 },
    ],
    newTextPosts: ''
  },
  friendsBlock: {
    friendsData: [
      { id: 1, friends: "Andrew" },
      { id: 2, friends: "Alex" },
    ],
  },
};

export let addPost = () => {
  let newPost = {
    id: 5,
    messege: basis.mainPage.newTextPosts,
    likes: 1,
  };
  basis.mainPage.postData.push(newPost);
  basis.mainPage.newTextPosts = '';
  redrawPage(basis);
};

export let updatePostText = (newText)=>{
  basis.mainPage.newTextPosts = newText;
  redrawPage(basis);
}

export default basis;
window.basis = basis;