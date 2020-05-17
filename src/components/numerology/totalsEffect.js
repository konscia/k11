import {useEffect, useState} from "preact/hooks";

export default function useTotalsEffect(words) {
  const [totals, setTotals] = useState({});

  useEffect(() => {
    let result = {
      sumVowels: 0,
      sumConsonants: 0,
      sumTotal: 0,
    };

    words.forEach(({sumVowels, sumConsonants, sumTotal}) => {
      result.sumVowels += sumVowels;
      result.sumConsonants += sumConsonants;
      result.sumTotal += sumTotal;
    });

    setTotals(result);
  }, [words]);

  return totals;
}