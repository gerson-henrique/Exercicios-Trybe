const valid = (num1, num2) => num1===num2? `acertou` : `errou`
const randomGenerator = (apst, valid) => {
  const sorted = Math.floor(Math.random()*5) + 1
  return valid(sorted, apst)
}
console.log(randomGenerator(4,valid));