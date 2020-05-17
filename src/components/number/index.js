let reduce9Digits = function (value) {
  if(isNaN(value)) {
    return 0;
  }

  if(value <= 9) {
    return value;
  }

  let result = value.toString().split('').reduce((total, digit) => {
    return total + parseInt(digit, 10);
  }, 0);

  return reduce9Digits(result);
};

export default function Number(props) {
  return (
    <div class={'number ' + props.type} title={'Origem: ' + props.number}>
       {reduce9Digits(props.number)}
    </div>
  )
}
