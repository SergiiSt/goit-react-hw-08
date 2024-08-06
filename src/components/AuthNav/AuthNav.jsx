import { NavLink } from "react-router-dom";
import css from "../AuthNav/AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={css.authNav}>
      <NavLink to="/register" className={css.authLink}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.authLink}>
        Login
      </NavLink>
    </div>
  );
}
