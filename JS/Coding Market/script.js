const a_parent = document.querySelectorAll('.parent')
const drops = document.querySelectorAll('.dd_menu')
const sub = document.querySelectorAll('.sub')

a_parent.forEach((a_item) => {
    a_item.addEventListener("click", function(){
        

        a_parent.forEach((a_item) => {
            a_item.classList.remove('active')

        })

       
   
        a_item.classList.toggle('active')
        console.log(e.target)
       
    })

    if(a_item.classList.contains("active") ){
          
    }


})



sub.forEach((item) => {

   item.addEventListener('click', function(e){ 
    item.classList.toggle('active')
    console.log(e.target)
   })
})


