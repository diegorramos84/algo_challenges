import { calculate } from "./calculate.js"
import promptSync from 'prompt-sync'
import chalk from 'chalk'

const prompt = promptSync()

console.log(chalk.bgBlue('----------------------------------------------------'))
console.log(chalk.blue('Hello! Welcome to Calculate:'))
console.log(chalk.bgBlue('----------------------------------------------------'))

let loop = "yes"

while (loop !== "no") {
  console.log("Please enter two numbers and the operator")
  let number1 = prompt("first number: ")
  let number2 = prompt("second number: ")
  let operator = prompt("operator(+,-,*,/): ")

  let result = calculate(parseInt(number1), parseInt(number2), operator)

  if (result > 0) {
    // red
    console.log(chalk.red("result: ", result))
  }
  else if (result < 0) {
    // green
    console.log(chalk.green("result: ", result))
  }
  else {
    //orange
    console.log(chalk.rgb(255, 165, 0)("Error, please enter valid numbers and operators", result))
  }

  loop = prompt('Continue? yes or no: ')

}
