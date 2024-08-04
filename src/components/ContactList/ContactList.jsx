import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import css from "./ContactList.module.css";
import {
  // selectContacts,
  selectVisibleContacts,
} from "../../redux/contacts/selectors";

export default function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <div className={css.listWrap}>
      <ul className={css.list}>
        {visibleContacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
}
