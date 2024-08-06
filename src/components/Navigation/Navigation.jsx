import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "../Navigation/Navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.navWrap}>
      <NavLink className={`${css.nav} ${css.first}`} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={`${css.nav} ${css.second}`} to="/contacts">
          Contacts
        </NavLink>
      )}
    </div>
  );
}
