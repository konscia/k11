import Number from "../number";
import useTotalsEffect from "./totalsEffect";

export function Totals(props) {
  const totals = useTotalsEffect(props.words);

  return (
    <div className='column totals'>
      <strong>Vogais</strong>
      <Number type='vowel' number={totals.sumVowels} />

      <strong>Consoantes</strong>
      <Number type='consonants' number={totals.sumConsonants} />

      <strong>Total</strong>
      <Number type='total' number={totals.sumTotal} />
    </div>
  )
}