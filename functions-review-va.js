let countingLog = 1
let countingLogSentence = "Below is the console.log for question #"
const qaz = (qazNote = "") => {
    console.log(" ")
    console.log(countingLogSentence + countingLog++ + " Note: " +qazNote)
}



// 1. Write a function named `marco` that returns "polo".
//I'lll use a const marco and console.log polo
qaz()
const marco = console.log("polo")
// 2. Write a function named `greeting` that takes a name as an argument and returns "Welcome, <person's name here>!"
//ill use a const greeting 
//argument will be used within ` and ${}
qaz()
const greeting = (personName) => {
    return `Welcome, ${personName}!`
}
console.log(greeting("Victor"))
// 3. Write a function named `oddOrEven` that takes a number as an argument and returns whether the number is odd or even.
//very similar to above ill use const to establish the function oddOrEven
//If statement will utilize the % 2 === 0 to determin if its an even number
//else will be suficient will not need to write else if
//console.log the result
const oddOrEven = (ooE1) => {
    if(ooE1 % 2 === 0){
        return (ooE1 + " is even.")
    }else {
        return (ooE1 + " is odd.")
    }
}
qaz()
console.log(oddOrEven(31123))
// 4. Write a function named `triple` that takes a number as an argument and returns the result of that number multiplied by 3.
// once again ill utilize the above answer as a template to adjust to this question
const triple = (triple1) => {
    return triple1 * 3
}
qaz()
console.log(triple(31123))

// 5. Write a function named `multiply` that takes two numbers as arguments and returns the result of the numbers multiplied together.
// once again ill utilize the above answer as a template to adjust to this question
const multiply = (multiply1, multiply2) => {
    return multiply1 * multiply2
}
qaz()
console.log(multiply(31123,3))
// 6. Write a function named `divisibleBy` that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (divisible1, divisibleBy1) => {
    if(divisible1 % divisibleBy1 === 0){
        return `${divisible1} is evenly divisible by ${divisibleBy1}`
    }else{
        return `${divisible1} is not evenly divisible by ${divisibleBy1}`
    }
}
qaz()
console.log(divisibleBy(30,3))
// 7. Write a function named `assignGrade` that takes a number score as an argument and returns the letter grade for the score.

// const assignGrade = (numberTake) => {
//         if(numberTake >= 90){
//             return(`You got an A!`)
//     }else if(numberTake >= 80){
//         return(`You got an B!`)
// }else if(numberTake <= 79){
//     return(`You got an F!`)
// }
// }

const letterGrade = ["A+","A","B","C","D","F"]
const letterGradeMinPercentage = [95,90,80,70,60,0]
const assignGrade = (assignGrade1) => {
    for(let i = 0; i < letterGrade.length; i++){
        if(assignGrade1 >= letterGradeMinPercentage[i])
        return letterGrade[i]
    }
}
qaz()
console.log(assignGrade(90))
// 8. Write a function named `isLonger` that takes two strings as arguments and returns the string that contains the most characters.
//function named isLonger will compare with a simple if statement and .length and output 12 or 21 depending on the result of the if statement
const isLonger = (isLonger1,isLonger2) => {
        if(isLonger1.length > isLonger2.length){
            return  isLonger1
        } else{
            return isLonger2
        }
}
qaz()
console.log(isLonger("Test of which sentence is longer", "Second sentence"))
console.log(isLonger("Second sentence", "Test of which sentence is longer")) //even with the sentences possition changed it gives the same result. moving on

// 9. Write a function named `greaterNum` that takes two numbers as arguments and returns whichever number is the greater (higher) number.
//A new name has been given and I'll have to change the values being taken but beyond that and removing .length I don't think anything else needs to change from above.
const greaterNum = (greaterNum1, greaterNum2) => {
    if(greaterNum1 > greaterNum2){
        return  greaterNum1
    } else{
        return greaterNum2
    }
}
qaz()
console.log(greaterNum(6512, 512))
console.log(greaterNum(512, 6512))//both return 6512 as that is the greater number regardless of where they are placed 
// 10. Write a function named `yelling` that takes a string as an argument and return the string in all uppercase case letters.
//nothing from question 9 will be taken. will use toUpperCase
const yelling = (yelling1) => {
    return yelling1.toUpperCase()
}
qaz()
console.log(yelling("this is a test of toUpperCase"))
// ### STRETCH Challenges

// 1. The World Translator   
//   (a) Write a function named `helloWorld` that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.  
var languageCode = ["af","sq","am",
"ar","hy","eu","be","bn","bg","ca","ny","zh","hr","cs","da","nl","en","et","fi","fr","fy","ka","de","el","ha","he","hi","hu","is","ig","id","it","ja","kk","km","ky","lo","lv","lt","lb","mk","ms","ml","mn","my","ne","no","ps","fa","pl","pt","pa","ro","ru","gd","sr","st","si","sl","es","su","sw","sv","tg","th","tr","uk","uz","vi","cy","xh",
"yi","yo","zu"]
var languageCodeLanguage = ["Afrikaans","Albanian","Amharic",
"Arabic","Armenia","Basque","Belarussian","Bengali","Bulgarian","Catalan","Chichewa","Chinese","Croatian","Czech","Danish","Dutch","English","Estonian","Finnish","French","Frisian","Georgian","German","Greek","Hausa","Hebrew","Hindi","Hungarian","Icelandic","Igbo","Indonesian","Italian","Japanese","Kazakh","Khmer","Kyrgyz","Lao","Latvian","Lithuanian","Luxemburgish","Macedonian","Malay","Malayalam","Mongolian","Myanmar","Nepali","Norwegian","Pashto","Persian","Polish","Portuguese","Punjabi","Romanian","Russian","ScotsGaelic","Serbian","Sesotho","Sinhala","Slovenian","Spanish","Sundanese","Swahili","Swedish","Tajik","Thai","Turkish","Ukrainian","Uzbek","Vietnamese","Welsh","Xhosa",
"Yiddish","Yoruba","Zulu"]
var languageHelloWorld = ["Hello Wêreld!","Përshendetje Botë!","ሰላም ልዑል!"
,"مرحبا بالعالم!", "Բարեւ աշխարհ!", "Kaixo Mundua!","Прывітанне Сусвет!", "ওহে বিশ্ব!","Здравей свят!","Hola món!", "Moni Dziko Lapansi!", "你好世界！","Pozdrav svijete!", "Ahoj světe!","Hej Verden!","Hallo Wereld!","Hello World!","Tere maailm!","Hei maailma!", "Bonjour monde!","Hallo wrâld!","გამარჯობა მსოფლიო!", "Hallo Welt!","Γειά oou Κόσμε!","Sannu Duniya!","שלום עולם!", "नमस्ते दुनिया!","Helló Világ!", "Halló heimur!", "Ndewo Ụwa!","Halo Dunia!","Ciao mondo!","こんにちは世界！","Сәлем Әлем!","សួស្តី​ពិភពលោក!", "Салам дүйнө!","ສະ​ບາຍ​ດີ​ຊາວ​ໂລກ!","Sveika pasaule!", "Labas pasauli!","Moien Welt!","Здраво свету!", "Hai dunia!","ഹലോ വേൾഡ്!", "Сайн yy дэлхий!", "မင်္ဂလာပါကမ္ဘာလောက!","नमस्कार संसार!", "Hei Verden!","سلام نړی!","سلام دنیا!","Witaj świecie!","Olá Mundo!","ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ!", "Salut Lume!","Привет мир!","Hàlo a Shaoghail!","Здраво Свете!", "Lefatše Lumela!","හෙලෝ වර්ල්ඩ්!","Pozdravljen svet!", "¡Hola Mundo!","Halo Dunya!","Salamu Dunia!", "Hej världen!","Салом Ҷаҳон!", "สวัสดีชาวโลก!","Selam Dünya!","Привіт Світ!", "Salom Dunyo!","Chào thế giới!","Helo Byd!", "Molo Lizwe!"
,"העלא וועלט!","Mo ki O Ile Aiye!","Sawubona Mhlaba!"]


const helloWorld = (LC1) => {
    if(languageCode.indexOf(LC1) !== -1){
    return languageCodeLanguage[languageCode.indexOf(LC1)]+" - " + languageHelloWorld[languageCode.indexOf(LC1)]
    }else{
        return "Hello World!"
    }
}
countingLog = 1
qaz("Start of STRETCH Challenges. Answered Stretch question 1 (a) and (b). The link provided in question (b) showing how to write in a default didn't help in answering this question but it did help with setting up notes in qaz, so that is cool.")

console.log(helloWorld("zu"))
// console.log(languageHelloWorld)

//   (b) Have your function [default](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) to returning English.

// 2. The Pluralizer  
//   (a) Write a function named `pluralizer` that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.

//with this question we have a few parameters that need assigning.
//any number that isnt 1 or -1 would have a pluralized noun in return
//words that are collective nouns will need to be ordered ill google a list of collective nouns

//   ```javascript
//   pluralizer(5, "cat")
//   // expected output: "5 cats"

//   pluralizer(1, "dog")
//   // expected output: "1 dog"
//   ```

//   (b) Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".


//with this question we have a few parameters that need assigning.
//any number that isnt 1 or -1 would have a pluralized noun in return
//words that are collective nouns will need to be ordered ill google a list of collective nouns
//I've got 56 or so ill now work on getting the information to be usefull
const singularNouns = ["boat","house","cat","river","bus","wish","pitch","box","penny","spy","baby","city","daisy","woman","man","child","tooth","foot","person","leaf","mouse","goose","half","knife","wife","life","elf","loaf","potato","tomato","cactus","focus","fungus","nucleus","syllabus","analysis","diagnosis","oasis","thesis","crisis","phenomenon","criterion","datum","sheep","fish","deer","species","aircraft","news","athletics","linguistics","darts","billiards","trousers","jeans","glasses"]
const singularToPluralNouns = ["boats","houses","cats","rivers","buses","wishes","pitches","boxes","pennies","spies","babies","cities","daisies","women","men","children","teeth","feet","people","leaves","mice","geese","halves","knives","wives","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabi/syllabuses","analyses","diagnoses","oases","theses","crises","phenomena","criteria","data","sheep","fish","deer","species","aircraft","news","athletics","linguistics","darts","billiards","trousers","jeans","glasses"]
//singular nouns and plural versions are ready

const pluralizer = (pluralizer1) => {
    if(singularNouns.indexOf(pluralizer1) !== -1){
        return singularToPluralNouns[singularNouns.indexOf(pluralizer1)]
    }else {
        return pluralizer1 + " is not currently supported. Please input another noun"
    }
}

qaz("Any one of ~56 nouns input as a string can be pluralized using the pluralizer function.")
console.log(pluralizer("sheep"))
console.log(pluralizer("goose"))
console.log(pluralizer("child"))
console.log(pluralizer("person"))
console.log(pluralizer("species"))