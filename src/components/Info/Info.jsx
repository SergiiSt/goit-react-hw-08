import css from '../Info/Info.module.css'

export default function Info({ children }) {
  return <p className={css.info}>{children}</p>;
}
