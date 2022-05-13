// Напишите валидационный скрипт используя функции

function checkStr(str) {
    if (typeof(str) == 'string') {                                       // 1. Скрипт должен на вход принимать строку
    } else {
        console.log("It's not a string type")
    } if (typeof(str) == 'string' && str.length >= 5 && str.length <= 64 && /[A-Za-z]/.test(str) && /[A-Z]/.test(str) && /[0-9]/.test(str) && str.includes("@") && str.length) {
        console.log("ACCEPT")
    } else {
        console.log("Error:")                                           // 2. После проверки строки выводить в консоль сообщение, где будет конкретно написано, что не так в ведённой строке
    } if (str.length >= 5 && str.length <= 64) {                        // 3. Минимум 5 символов в строке
    } else {                                                            // 4. Максимум 64 символа в строке
        console.log("Enter min 5 and max 64 symbols")
    } if (/[A-Za-z]/.test(str)) {                                       // 5. В строке должны быть буквы
    } else {
        console.log("The line must contain the letters")
    } if (/[A-Z]/.test(str)) {                                          // 6. Должна быть хотя бы одна буква в верхнем регистре
    } else {
        console.log("There must be at least one letter in upper case")
    } if (/[0-9]/.test(str)) {                                          // 7. Должна быть хотя бы одна цифра
    } else {
        console.log("There must be at least one number")
    } if (str.includes('@')) {                                          // 8. Должна быть хотя бы одна @
    } else {
        console.log("There must be at least one @")
    } if (str.length === 0 || !str.trim()) {                            // 9. Строка не должна быть пустой
        console.log("The line is empty or consists only of spaces")
    }
}  
checkStr("Q123@mail.com")
checkStr(' ')

// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

let i = 1;
let result = 1;
while (i <= 10) {
    result = result * 2
    i++
}
console.log (result)

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

// Вариант 1:

const power = function(num) {
    let result = 1;
    for (let i=1; i<=num; i++) {
        result = result *2
    }
    return result
}
console.log(power(10))

// Вариант 2:

const power2 = function(num) {
    return 2**num
}
console.log(power2(10))

//Вариант3:

const power3 = function(num) {
    return Math.pow(2,num)
}
console.log(power3(10))

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let word = ':)';
let result2 = ' ';
for (let i=1; i<=5; i++) {
    result2 += word
    console.log(result2)
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

// Вариант 1:

function printSmile(stroka, numberOfRows) {
    let result3 = ' ';
    for (let i=1; i<=numberOfRows; i++) {
        result3 += stroka
        console.log(result3)
    }
}
printSmile(':(', 5)

//Вариант 2:

function printSmile2(stroka, numberOfRows) {
    for (let i=1; i<=numberOfRows; i++) {
        console.log(stroka.repeat(i))
    }
}
printSmile2(';)', 5)

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из (число) гласных и (число) согласных букв
// Проверки: 'case', 'Case', 'Check-list'

// Вариант 1:

const getWordStructure = function(word) {
    let n = 0
    let k = 0
    let vow=['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
    let con=['b', 'B', 'c', 'C', 'd', 'D', 'f', 'F', 'g', 'G', 'h', 'H', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'p', 'P', 'r', 'R', 's', 'S', 't', 'T', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z', 'q', 'Q']

    for(i = 0; i < word.length; i++){
        for(j = 0; j < vow.length; j++){
            if(word[i] === vow[j]) {
                n++
                break
            }
        }
        for(q = 0; q < con.length; q++) {
            if(word[i] === con[q]){
                k++
                break
            }
        }
    }
    console.log('1. Слово ' + word + ' состоит из ' + n + ' гласных и ' + k + ' согласных букв')
}
getWordStructure('case')
getWordStructure('Case')
getWordStructure('Check-list')
getWordStructure('X A-12')

// Вариант 2:

function getWordStructure2(word) {
    const vowels = 'aeiou'.split('')
    const consonants = 'bcdfghjklmnpqrstvwxyz'.split('')
    let numberOfVowels = 0
    let numberOfConsonants = 0
    for(char of word.toLowerCase()){
        if (vowels.includes(char)) numberOfVowels++
        if (consonants.includes(char)) numberOfConsonants++
    }
    console.log(`2. Слово ${word} состоит из ${numberOfVowels} гласных и ${numberOfConsonants} согласных букв`)
}
getWordStructure2('case')
getWordStructure2('Case')
getWordStructure2('Check-list')
getWordStructure2('X A-12')

// Вариант3:

function getWordStructure3(word) {
    let vowels = word.match(/[aeiou]/gi)
    let consonants = word.match(/[bcdfghjklmnpqrstvwxyz]/gi)
    console.log('3. Слово ' + word + ' состоит из ' + vowels.length + ' гласных и ' + consonants.length + ' согласных букв')
}
getWordStructure3('case')
getWordStructure3('Case')
getWordStructure3('Check-list')
getWordStructure3('X A-12')

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)
// Проверки: 'abba', 'Abba'

// Вариант 1:

function isPalindrom(word) {
    let newLine = ''
    for(i = word.length - 1; i >= 0; i --){
        newLine = newLine + word[i]
    }
    if (word.toLowerCase() == newLine.toLowerCase()) {
        console.log(word, '- it is a palindrome')
    } else {
        console.log(word, '- it is not a palindrome')
    }
}
isPalindrom('abba')
isPalindrom('Ab1ba')
isPalindrom('Un12nu')

// Вариант 2:

function isPalindrom2(word) {
    return word.toLowerCase() == word.toLowerCase().split('').reverse().join('')
}
console.log (`${isPalindrom2('Abba') ? 'It is a palindrome' : 'It is not a palindrome'}`)
console.log (`${isPalindrom2('Un12nu') ? 'It is a palindrome' : 'It is not a palindrome'}`)

// Вариант 3:

function isPalindrom3(str) {
    str = str.toLowerCase()
    const len = str.length
    for (let i =0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return 'It is not a palindrome'
        }
    }
    return 'It is a palindrome'
}
console.log(isPalindrom3('Un12nu'))
console.log(isPalindrom3('allllla'))
