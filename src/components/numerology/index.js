import {useEffect, useState} from "preact/hooks";
import {isVowel, letter2Number} from "../../lib/numerology"
import Letter from "../letter";
import Number from "../number";

export default function Numerology() {
  const [name, setName] = useState('Kaléu Puskas Diedrich Caminha') ;
  const [birth, setBirth] = useState('1990-01-27') ;

  function onInputBirth(e) {
    return setBirth(e.target.value);
  }

  function onInputName(e) {
    return setName(e.target.value);
  }

  const [birthResult, setBirthResult] = useState({
    sumYear: 0,
    sumTotal: 0,
    sumDayAndMonth: 0,
    sumDay: 0,
    sumMonth: 0
  });

  //convert numerologyResult to Typescript
  const [numerologyResult, setNumerologyResult] = useState({
    letters: [
      {
        letter: '',
        number: 0
      }
    ],
    sumVowels: 0,
    sumConsonants: 0,
    sumAll: 0
  });

  useEffect(() => {
    let result = {
      letters: [],
      sumVowels: 0,
      sumConsonants: 0,
      sumAll: 0
    };

    name.split('').forEach((letter) => {
      let number = letter2Number(letter);
      result.letters.push({letter, number});
      if(isVowel(letter)) {
        result.sumVowels += number
      } else {
        result.sumConsonants += number
      }
    })

    result.sumAll = result.sumVowels + result.sumConsonants;
    setNumerologyResult(result);
  }, [name]);

  let sumDigitsOfString = function (value) {
      return value.split('').reduce((total, digit) => {
        return total + parseInt(digit, 10);
      }, 0)
  };

  useEffect(() => {
    let result = {
      sumYear: 0,
      sumTotal: 0,
      sumDayAndMonth: 0,
      sumDay: 0,
      sumMonth: 0
    };

    let birthParts = birth.split('-');
    let year = birthParts[0];
    let month = birthParts[1];
    let day = birthParts[2];

    result.sumDay = parseInt(day, 10);
    result.sumMonth = parseInt(month, 10);
    result.sumYear = sumDigitsOfString(year);
    result.sumDayAndMonth = result.sumDay + result.sumMonth;
    result.sumTotal = result.sumDayAndMonth + result.sumYear;

    setBirthResult(result);
  }, [birth]);

  return (
    <div>
      <label>Data de Nascimento:</label><br />
      <input value={birth} type='date' onInput={onInputBirth} />

      <br />
      <br />

      <label>Informe seu nome:</label><br />
      <input value={name} type='text' onInput={onInputName} />

      <br />
      <div style='clear: both; width: 100%; float: left; margin: 20px;'>
        {
          numerologyResult.letters.map(({letter, number}) => {
            return <Letter letter={letter} number={number} />
          })
        }
      </div>
      <br />
      Soma total: <Number number={numerologyResult.sumAll} /><br />
      Soma vogais: <Number number={ numerologyResult.sumVowels } /><br />
      Soma consoantes: <Number number={ numerologyResult.sumConsonants } /><br />
      <br />
      Soma Dia: <Number number={birthResult.sumDay} /><br />
      Soma Mês: <Number number={birthResult.sumMonth} /><br />
      Soma Ano: <Number number={birthResult.sumYear} /><br />
      Soma Dia + Mês: <Number number={birthResult.sumDayAndMonth} /><br />
      Soma Data Nascimento: <Number number={birthResult.sumTotal} /><br />
    </div>
  )
}
