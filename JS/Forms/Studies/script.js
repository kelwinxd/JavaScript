const formu = document.querySelector("#contact")
const output = document.querySelector("#output")
const btn = document.querySelector(".btn1")
const div1 = document.getElementById("data")
console.log(formu.elements.name.value)

const dados = {}

function handleKey(event){
     const target = event.target
     console.log(target.checkValidity())

     

     if(!target.checkValidity()){
          target.classList.add('err')
          formu.name.setCustomValidity('Nome é necessário!')
          target.nextElementSibling.innerText = target.validationMessage
          
     }else {
          target.classList.remove('err')
          target.nextElementSibling.innerText = ' '
     }

     dados[event.target.name] = event.target.value

     console.log(event.target.value)
     
}


function showData(event){
        event.preventDefault()
        div1.innerHTML = `<h3>Nome:</h3> <span> ${dados.name}</span>
        <h3>Email:</h3> <span> ${dados.email}</span>
        <h3>Mensagem:</h3> <span> ${dados.textarea}</span>`
}
console.log(formu.name)
formu.addEventListener("change",handleKey)
btn.addEventListener('click', showData)

// if u use addeventlistener(change) it will capture the voice too