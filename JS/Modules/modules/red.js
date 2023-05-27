export default function turnRed(){
    const div = document.getElementById("div")

    console.log(div)
    
    div.addEventListener("contextmenu",function (event){
        event.preventDefault()
        console.log("dblclick")
        div.style.backgroundColor = "red"
    })
}
