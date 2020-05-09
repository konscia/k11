import style from "./style.css";

export default function Letter(props) {
  return (
    <div class={props.number > 0 ? style.letter : style.empty}>
      {props.letter}
      <br />
      {props.number > 0 ? props.number : '-'}
    </div>
  )
}
