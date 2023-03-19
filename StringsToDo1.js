function removeSpaces(str){
    let strArr = str.split(" ")
    str = strArr.join("")
    return (str);
}

function getDigits(str){
    let newStr = ""
    for (const character of str) {
        if(!isNaN(character) && character!==" ")
            newStr+=character
    }
    return parseInt(newStr);
}

function acronyms(str) {
    let strArr = str.split(" ")
    let newStr = ""
    for (const value of strArr) {
        newStr+=value[0].toUpperCase()
        if(value.includes("."))
            newStr+="-"
    }
    return newStr
}

function noSpacesLength(str){
    let strArr = str.split("")
    let counter = 0
    for (const value of strArr) {
        if(value !== " ")
            counter++
    }
    return counter
}

function removeShorterStrings(arr, len){
    let newArr = []
    for (const value of arr) {
        if(value.length > len)
            newArr.push(value)
    }
    return newArr
}

console.log(removeSpaces("Pl ayTha tF u nkyM usi c"));
console.log(getDigits("0s1a3y5w7h9a2t4? 6! 8? 0"));
console.log(acronyms("En vivo desde Nueva York, es sábado por la noche"));
console.log(noSpacesLength("Amor, me estás volviendo loca"));

console.log(removeShorterStrings( ( "Amor, me estás volviendo loca" ).split(" ") , 5 ));