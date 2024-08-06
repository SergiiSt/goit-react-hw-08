import { useDispatch, useSelector } from "react-redux";
import {
  filterContacts
} from "../../redux/filter/slice";
import {
  selectTextFilter
} from "../../redux/filter/selectors";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterName = useSelector(selectTextFilter);
  const handleInputChange = (event) => {
    dispatch(filterContacts(event.target.value));
  };


  return (
    <div className={css.searchWrap}>
      <h2>Find contacts by name or number</h2>
      <input
        className={css.input}
        type="text"
        value={filterName}
        onChange={handleInputChange}
        name="search"
      />
    </div>
  );
}
