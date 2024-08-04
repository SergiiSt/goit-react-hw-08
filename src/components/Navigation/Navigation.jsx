import { NavLink } from "react-router-dom";
import css from "../Navigation/Navigation.module.css";

export default function Navigation() {
  return (
    <div>
      <NavLink className={`${css.nav} ${css.first}`} to="/">
        Home
      </NavLink>
      <NavLink className={`${css.nav} ${css.second}`} to="/contacts">
        Contacts
      </NavLink>
    </div>
  );
}
