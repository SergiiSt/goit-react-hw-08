import { Blocks } from "react-loader-spinner";
import css from "../Loader/Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loader}>
      <Blocks
        height="80"
        width="80"
        color="#422ec3"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    </div>
  );
}
