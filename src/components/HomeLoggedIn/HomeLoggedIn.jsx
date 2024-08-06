import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { selectLength } from "../../redux/contacts/selectors";
import css from "./HomeLoggedIn.module.css";

export default function HomeLoggedIn() {
  const user = useSelector(selectUser);
  const length = useSelector(selectLength);
  return (
    <main className={css.container}>
      <h1>Welcome to Contacts App, {user.name}</h1>
      <h2 className={css.title}>
        This application is created for you to store your contacts
      </h2>
      <p className={css.paragraph}>
        You have {length === 1 ? `${length} contact` : `${length} contacts`}
      </p>
    </main>
  );
}
