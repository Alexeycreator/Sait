import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./DialogsItem/DialogsItem";
import Messege from "./Messege/Messege";

const Dialogs = (props) => {
  let dialogsElements = props.basis.dialogsData.map((d) => (
    <Dialog name={d.name} id={d.id} />
  ));

  let messegeElements = props.basis.messegeData.map((m) => (
    <Messege messege={m.messege} />
  ));
  let newMessege = React.createRef();
  let send = () => {
    let text = newMessege.current.value;
    alert(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElements}</div>
      <div className={s.messeges}>
        {messegeElements}
        <textarea ref={newMessege}></textarea>
        <div>
          <button onClick={send}>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
