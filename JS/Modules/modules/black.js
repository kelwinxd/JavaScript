
export function teste(){
        console.log("isso é um teste")
    }

export function black(){
    const div = document.getElementById("div")

    console.log(div)
    
    div.addEventListener("click",function (event){
        
        console.log("click")
        div.style.backgroundColor = "black"
    })
}
