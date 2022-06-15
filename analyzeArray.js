const analyzeArray = (array) => {
  const object = {
    average: calcAverage(array),
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
  function calcAverage(array) {
    const initialValue = 0;
    const sumWithInitial = array.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    return sumWithInitial / array.length;
  }
  return object;
};

module.exports = analyzeArray;
