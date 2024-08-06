import { NavLink } from "react-router-dom";
import css from "../HomeLoggedOut/HomeLoggedOut.module.css";

export default function HomeLoggedOut() {
  return (
    <main className={css.container}>
      <h1>Welcome to Contacts App</h1>
      <h2 className={css.title}>
        This application is created for you to store your contacts
      </h2>
      <p className={css.paragraph}>
        You need to{" "}
        <NavLink to="/register" className={css.link}>
          register
        </NavLink>
      </p>
      <p className={css.paragraph}>
        {" "}or{" "}
        <NavLink to="/login" className={css.link}>
          login{" "}
        </NavLink>
      </p>
    </main>
  );
}
