function Inverted(string) {
    let arrWord = string.split('')
    let invetedString = ""
    for(let i = arrWord.length - 1; i >= 0; i--){
        invetedString+=arrWord[i]

    }

    console.log(invetedString)

}

Inverted('helloo')
