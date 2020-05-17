import Letter from "../letter";
import Number from "../number";

export function Words(props) {
  return (
    <div className='column words'> {
      props.words.map(({letters, sumVowels, sumConsonants, sumTotal}) => {
        return <div class='word'>
          <div className='letters'>
            {
              letters.map(({letter, number}) => {
                return <Letter letter={letter} number={number} />
              })
            }
          </div>
          <div class='word-result'>
            <Number type='vowel' number={sumVowels} />
            <Number type='consonants' number={sumConsonants} />
            <Number type='total' number={sumTotal} />
          </div>

        </div>;
      })
    }
  </div>
  )
}