// 1. Implement a capitalize function

const capitalize = (word) => {
  const firstletter = word.charAt(0)
  const otherletters = word.slice(1)

  return firstletter.toUpperCase() + otherletters

}

console.log(capitalize('hello'))


// 2. Implement a swapcase function

const swapcase = (word) => {
  let answer = ""
  // make the word an array to use for each method
  const wordArray = word.split("")

  // iterate checking if the letter is upper or lowecase with regex
  wordArray.forEach(el => {
    if (/[a-z]/.test(el)) {
      answer += el.toUpperCase()
    }
    if (/[A-Z]/.test(el)) {
      answer += el.toLowerCase()
    }
  });
  return answer
}

console.log(swapcase("lAfOSSEaCADEMY"))

// 3. Implement 2 reverse functions
// 3.1 using for

 const reverse1 = (word) => {

  let reversedArray = ""
  const wordArray = word.split("")

  for (let i = wordArray.length-1; i >= 0; i--) {
    reversedArray += wordArray[i]
  }

  console.log(reversedArray)

 }

 reverse1("tpircSavaJ")

//  3.2 using for in

const reverse2 = (word) => {
  const wordArray = word.split("").reverse()
  let reversedArray2 = ""
  let i = wordArray.length - 1

  for (let i in wordArray) {
    reversedArray2 += wordArray[i]
  }
  console.log(reversedArray2)
}

reverse2("olleh")
reverse2("tpircSavaJ")

// 4 Implement an upcase function using Array.prototype.forEach()

const upcase = (array) => {
  let newArray = []
  array.forEach(element => {
    newArray.push(element.toUpperCase())
  });
  return newArray
}

console.log(upcase(["a", "b", "c", "d"]) )

// 5 Implement downcase using Array.prototype.map()

const downcase = (array) => {
  let newArray = array.map(element => element.toLowerCase());
  return newArray
}

console.log(downcase(["A", "B", "C", "D"]) )

// 6. Implement evens using Array.prototype.filter()

const isEven = value => (value % 2 === 0)

const evens = (array) => {
  let evenArray = array.filter(el => isEven(el))
  return evenArray
}

console.log(evens([1, 2, 3, 45, 79, 8]))

// 7. Implement howIndex using Array.prototype.indexOf()

const howIndex = array => {
  return array.indexOf('how')
}

console.log(howIndex([ 'hello', 'how', 'are', 'you' ]))

// 8. Implement a third reverse function using Array.prototype.join() and String.prototype.split() (not necessarily in that order)

const reverse3 = word => {
  const reverseArray = word.split("").reverse().join("")
  return reverseArray
}

console.log(reverse3("olleh"))
console.log(reverse3("tpircSavaJ"))

// 9. Implement max and shortestString using Array.prototype.reduce()

const max = array => {
  const getMax = (a,b) => Math.max(a,b)
  const maxValue = array.reduce(getMax)
  return maxValue
}

console.log(max([1, 297, -73, 99, 10]))

const shortestString = array => {
  const getShortest = (a,b) => { return a.length < b.length ? a : b }
  const shortest = array.reduce(getShortest)
  return shortest
}

console.log(shortestString(['I', 'prefer', 'marshmallow', 'to', 'oreo']))

// 10. Implement a sort function without using Array.prototype.sort()

// using the bubble sort function
const bubbleSort = (array) => {
  let done = false
  while (!done) {
    done = true
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        done=false
        let tmp = array[i - 1]
        array[i - 1] = array[i]
        array[i] = tmp
      }
    }
  }
  return array
}

const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
'September', 'October', 'November', 'December']

console.log(bubbleSort(months))

// 11. Implement sortedNames Using Array.prototype.sort()

const sortedNames = (array) => {
  const newArray = []
  array.forEach(el => {
    newArray.push(el.toLowerCase())
  })
  return newArray.sort()
}

const trainers = ["Ree", "romeo", "emile", "sergi"]

console.log(sortedNames(trainers))


// 12. Implement countLetters that will print

const countLetters = (string) => {
  const count = {}

  for (let i=0; i < string.length; i++) {
    const letter = string[i].toLowerCase()
    if (string[i].match(/[a-zA-Z]/)) {
      if (!count[letter]) {
        count[letter] = 1
      } else {
        count[letter]++
      }
    }
  }
  return count
}


const sentence = "Hello I am a random sentence, we have learnt HTML, CSS, git and GitHub so far. Thanks"

console.log(countLetters(sentence))
