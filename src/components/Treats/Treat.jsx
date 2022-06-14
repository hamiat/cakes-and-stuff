import style from "./treats.module.scss";

export default function Treat({ title }) {
  return (
    <div className={style.treat}>
      <h2>{title}</h2>
    </div>
  );
}
