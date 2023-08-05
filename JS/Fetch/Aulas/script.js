//fetching a local file.txt

//to use the body of response, you must continue with .then 
//after converting it in a text()
fetch('./doc.txt').then(res => res.text())
.then(res => {
    const text = document.querySelector('h3')
    text.innerText = res
}
    )

//fetch with JSON

const cep = fetch("https://viacep.com.br/ws/01001000/json/")

cep.then(res => res.json()).then(body => {
    const pJson = document.getElementById('json')
    const pNeigh = document.getElementById('neigh')
    pJson.innerText = body.logradouro
    pNeigh.innerText = body.localidade

} )

//fetching Style.css

const styleEl = document.createElement('style')
fetch('./style.css').then(r => r.text())
.then(stylize => {
   styleEl.innerHTML = stylize
   document.body.appendChild(styleEl)
})


//fetching Html
const htmlFile = fetch('./about.html')

const Div = document.createElement('div')
const Par = document.createElement('p')
htmlFile.then(r => r.text())
.then(htmlEl => {
   
    Div.innerHTML = htmlEl
    const title1 = Div.querySelector('h2')
    const p = Div.querySelector('p')
    document.querySelector('h1').innerText = title1.innerText
    Par.innerText = p.innerText
    document.body.appendChild(Par)

})

//fetching a image blob()
const imageDom = fetch('./nature.avif')
const btn = document.querySelector('button')
const imgBody = document.createElement('img')

imageDom.then(r => r.blob())
.then(res => {
    //converting img to url for source
const imgURL = URL.createObjectURL(res)
imgBody.src = imgURL
btn.addEventListener('click', () => {
    document.body.appendChild(imgBody)

})
   
})

//Response.state

const findText = fetch('./text.txt')

findText.then(r => {
    console.log(r.type)
    if(r.status == 404){
        console.log('not found bitch')
    }
})





