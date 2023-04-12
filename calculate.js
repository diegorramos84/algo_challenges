const calculate = (number1, number2, word) => {
  switch (word) {
    case "+":
      return number1 + number2
      break;
    case "-":
      return number1 - number2
      break
    case "*":
      return number1 * number2
      break
    case "/":
      return number1 / number2
    default:
      break;
  }
}

export { calculate }
