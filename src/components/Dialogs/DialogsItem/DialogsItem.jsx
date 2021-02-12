import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.item}>
      <img src="https://archilab.online/images/1/123.jpg" />
      <div className={s.dialog + " " + s.active}>
        <NavLink to={path} activeClassName={s.activeLink}>
          {props.name}
        </NavLink>
      </div>
    </div>
  );
};

export default Dialog;
