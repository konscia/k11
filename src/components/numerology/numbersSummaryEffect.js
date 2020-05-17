import {useEffect, useState} from "preact/hooks";

const defaultNumbersSummary = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
};

export default function useNumbersSummaryEffect(words) {
  const [numbersSummary, setNumbersSummary] = useState(defaultNumbersSummary);

  useEffect(() => {
    const summary = Object.assign({}, defaultNumbersSummary);
    words.forEach(({letters}) => {
      letters.forEach(({number}) => {
        summary[number]++;
      })
    });

    setNumbersSummary(summary);
  }, [words]);

  return numbersSummary;
}