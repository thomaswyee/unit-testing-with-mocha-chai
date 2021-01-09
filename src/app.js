const log = console.log;

const luhn = (numStr) => {
  let sumOdd = 0;
  let even = [];
  let sumEven = 0;
  
  if (numStr === undefined) {
    return 'empty input';
  } else {
    let arr = numStr.split('');
    arr.map((val, index) => {
      index % 2 === 0 ? even.push(Number(val) * 2) : sumOdd += Number(val);
    });
    sumEven = even.reduce((sum, val) => {
      val = val.toString();
      val.length === 2 ? val = Number(val[0]) + Number(val[1]) : val = Number(val);
      return sum + val;
    });
  
    return (sumEven + sumOdd) % 10 === 0 ? 'valid number' : 'invalid number';
  }
  
};

module.exports = {
  luhn
};
