import {isVowel, letter2Number} from "../../lib/numerology";
import {useEffect, useState} from "preact/hooks";

const defaultWords = [
  {
    word: 'João',
    letters: [
      {
        letter: '',
        number: 0,
        vowel: false
      }
    ]
  },
];

export default function useWordsEffect(name) {
  const [words, setWords] = useState(defaultWords);

  useEffect(() => {
    let wordsResult = [];
    name.split(' ').forEach((word) => {
      let result = {
        word,
        letters: [],
        sumVowels: 0,
        sumConsonants: 0,
        sumTotal: 0,
      };

      word.split('').forEach((letter) => {
        let number = letter2Number(letter);
        let vowel = isVowel(letter);

        result.letters.push({letter, number, vowel});

        if(vowel) {
          result.sumVowels += number;
        } else {
          result.sumConsonants += number;
        }
        result.sumTotal += number;
      });

      wordsResult.push(result);
    });

    setWords(wordsResult);
  }, [name]);

  return words;
}