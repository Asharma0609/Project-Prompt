const guessLuckyNumber = () => {
    let guessedNumber = Math.floor(Math.random() * 100) + 1;
    return guessedNumber;

}

const string = (guessedNumber) =>{
    return `My Lucky Number is ${guessedNumber}`;
}

const luckyNumber = guessLuckyNumber()

console.log(string(luckyNumber));