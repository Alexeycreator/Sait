import React from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Customization from "./components/Customization/Customization";
import { Route } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <Header />
      <Menu basis={props.basis.friendsBlock} />
      <div className="AppMain">
        <Route
          path="/dialogs"
          render={() => <Dialogs basis={props.basis.dialogsPage} />}
        />
        <Route
          path="/main"
          render={() => <Main basis={props.basis.mainPage} addPost={props.addPost} updatePostText={props.updatePostText} />}
        />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/customization" render={() => <Customization />} />
      </div>
      <div className="calendarColorButton">
        <a href="#s">Посмотреть календарь</a>
      </div>
    </div>
  );
}

export default App;
