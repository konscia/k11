import {useState} from "preact/hooks";
import useWordsEffect from "./wordsEffect";
import {Words} from "./Words";
import {Summary} from "./Summary";
import {Totals} from "./Totals";

const defaultName = 'Brasil';

export default function Numerology() {
  const [name, setName] = useState(defaultName);
  const words = useWordsEffect(name);

  function onInputName(e) {
    return setName(e.target.value);
  }
  return (
    <div>
      <div class='row k11-input'>
        <label>Informe seu nome:</label><br />
        <input value={name} type='text' onInput={onInputName} />
      </div>

      <div class='row'>
        <Totals words={words} />
        <Words words={words} />
        <Summary words={words} />
      </div>
    </div>
  )
}
