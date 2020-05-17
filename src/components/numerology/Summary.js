import useNumbersSummaryEffect from "./numbersSummaryEffect";

export function Summary(props) {
  const numbersSummary = useNumbersSummaryEffect(props.words);

  return (
    <div className='column summary'>
      <ul>
        {
          Object.keys(numbersSummary).map((key) => {
            const occurrences = numbersSummary[key];
            const width = occurrences * 10;
            const style = `width: ${width}px`;
            return <li>
              <strong>{key}</strong>
              <span title={occurrences + ' ocorrências nas letras'} style={style} />
            </li>;
          })
        }
      </ul>
    </div>
  );
}