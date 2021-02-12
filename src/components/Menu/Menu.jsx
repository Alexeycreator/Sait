import React from "react";
import s from "./Menu.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/FriendsBlock";

const Menu = (props) => {
  let friendsBlockElements = props.basis.friendsData.map((f) => (
    <Friends friends={f.friends} id={f.id} />
  ));

  return (
    <nav className={s.menu}>
      <div className={s.item}>
        <NavLink to="/main" activeClassName={s.activeLink}>
          Мой профиль
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>
          Сообщения
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}>
          Новости
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.activeLink}>
          Музыка
        </NavLink>
      </div>
      <div className={s.indentCustomization}>
        <div className={s.item}>
          <NavLink to="/customization" activeClassName={s.activeLink}>
            Настройки
          </NavLink>
        </div>
      </div>
      <div className={s.indentFriendsBlock}>Друзья</div>
      {friendsBlockElements}
    </nav>
  );
};

export default Menu;
