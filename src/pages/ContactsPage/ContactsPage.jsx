import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLength, selectLoading } from "../../redux/contacts/selectors";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Loader from "../../components/Loader/Loader";
import Info from "../../components/Info/Info";
import SearchBox from "../../components/SearchBox/SearchBox";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const length = useSelector(selectLength);
  const loading = useSelector(selectLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <ContactForm />
      <SearchBox />
      {loading ? (
        <Loader />
      ) : length === 0 ? (
        <Info>You do not have contacts now!</Info>
      ) : (
        <ContactList />
      )}
    </>
  );
}
