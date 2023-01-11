
//First Task

let num1 = +prompt("Ilk eded?")
let num2 = +prompt("Ikinci eded?")

if(num1 % (num2**2) == 0){
 while(num1>1 && num1 % (num2**2) == 0 ){
    number=num1/(num2**2)
    console.log(number.toString(16))
    break
 };
}
else{
    console.log("num1 num2 kvandratina bolunmur!")
}

//Palindrome

// let palindrome = prompt()

// function palindromeCheck(palindrome) {
// let x = palindrome.toString()
// return x.split("").reverse().join("") == x
// }


// if(palindromeCheck(palindrome)){
//     console.log("Polindromdur!")
// }
// else{
//     console.log("Polindrom Deyil!")
// }


//Replace Star 


// let x = prompt()
// let y = x.replace(/a/g,  "*").replace(/u/g,  "*").replace(/e/g,  "*")
// console.log(y)



//EBOB

// let num1 = prompt("Birinci ededi qeyd edin!");
// let num2 = prompt("Ikinci ededi qeyd edin!");

// for (let i = 1; i <= num1 && i <= num2; i++) {
//     if( num1 % i == 0 && num2 % i == 0) {
//         ebob = i;
//     }
// }

//EKOB

// let ekob = (num1*num2) / ebob;
// console.log("Ededlerin Ebobu: "+ ebob)
// console.log("Ededlerin Ekobu: "+ ekob)


//Find "O"

// let sentence = prompt()
// let word = sentence.split(" ")
// let containsO = word.filter((wordo) => wordo.includes("o","O"));
// let x = containsO.join(" ")
// console.log(x);


//Temprature

// let c = +prompt("Tempraturu qeyd edin(Celsius):")
// let f = (c*1.8)+32
// let k = c+273.15
// console.log("Celsius:" + c)
// console.log("Farenheit:" + f)
// console.log("Kelvin:" + k)