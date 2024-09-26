const innerCalculations = (numberString, delimiter) => {
  let finalNumberArray = [];
  let negetiveElementArray = [];
  let ifAnyNegetiveNumber = false;

  let numbers = numberString.split(delimiter);
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i].length === 1) {
      const number = parseInt(numbers[i]);
      if (number < 0) {
        ifAnyNegetiveNumber = true;
        negetiveElementArray.push(number);
      }
      finalNumberArray.push(number);
    } else {
      const newLineSeparatorArray = numbers[i].split(",");
      for (let j = 0; j < newLineSeparatorArray.length; j++) {
        const number = parseInt(newLineSeparatorArray[j]);
        if (number < 0) {
          ifAnyNegetiveNumber = true;
          negetiveElementArray.push(number);
        }
        finalNumberArray.push(parseInt(number));
      }
    }
  }
  if (ifAnyNegetiveNumber) {
    alert(
      `Negative numbers are not allowed: ${negetiveElementArray.join(", ")}`
    );
    return null;
  }
  return finalNumberArray.reduce((total, num) => total + num, 0);
};

const doAdditionFromString = (inputString) => {
  if (!inputString) return 0;
  let finalNumberArray = [];
  let negetiveElementArray = [];
  let ifAnyNegetiveNumber = false;

  const numberString = inputString.split("\n")[1]; // here we are sperating the nmber parts what ever delimiter it can have
  const delimiter = inputString.split("\n")[0].split("//")[1]; // get the delimiter

  if (numberString === undefined || delimiter === undefined) {
    // here in case we have "1,2,3" or "1/n,1,4" sort of input where no delimiter mention
    return innerCalculations(inputString, "\n");
  } else {
    return innerCalculations(numberString, delimiter);
  }
};
