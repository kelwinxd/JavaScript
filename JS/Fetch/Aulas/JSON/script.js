//in the past thing were done this way
//JSON.parse convert the file to JSON

fetch('./MOCK_DATA.json')
.then(r => r.text()) // but now just use .json()
.then(jsonText => {finalJson = JSON.parse(jsonText)
console.log(finalJson)
})

//JSON.stringfy
// Convert Object json to a string
fetch('./MOCK_DATA.json').then(res => res.json())
.then(obj =>{objString = JSON.stringify(obj); console.log(objString)} )
