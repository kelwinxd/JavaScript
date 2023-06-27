const formu = document.querySelector("#contact")
const ran = document.getElementById('ran')
const h2 = document.querySelector('h2')
const checkB = document.getElementById('identify')


function Hclick(event){
    document.body.style.backgroundColor = event.target.value
}

function Change(event){
   h2.style.fontSize = `${event.target.value}px`
}

function checkBox(event){
    if(checkB.checked){
        console.log(event.target.value)
    }

}

ran.addEventListener('input', Change)
checkB.addEventListener('input', checkBox)

formu.addEventListener('change', Hclick)