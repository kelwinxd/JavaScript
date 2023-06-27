const control = document.querySelector('.controller')
const btn = document.querySelector('button')
const box = document.getElementById('check')
const cssText = document.querySelector('.css')

const cssBtn = {
    element: btn,
    text(value){
      this.element.innerText = value
    },
    backgroundColor(value){
        this.element.style.backgroundColor=value;},
    width(value){
        this.element.style.width=value+'px'
    },
    color(value){
        this.element.style.color=value;
    },
    borderRadius(value){
        this.element.style.borderRadius=value+'px'
    }
        
}

function boxCheck(){
    if(box.checked == true){
        btn.style.border = 'none'
    } else {
        btn.style.border = '1px solid gray'
    }
}

function showCss(){
    cssText.innerHTML =  '<p>' + btn.style.cssText.split('; ').join('<p></p>')
}


function upDate(event){
    const name = event.target.name
    const value = event.target.value
     cssBtn[event.target.name](event.target.value)
     saveState(name,value)
     
     showCss()
}

function saveState(name, value){
    localStorage[name] = value
}

/*function setState(){
    const props = Object.keys(localStorage)
     props.forEach(propertie => {
        console.log(control.elements.text)
      
     })
}

setState();*/

console.log(control)




box.addEventListener("input", boxCheck)
control.addEventListener("input", upDate)