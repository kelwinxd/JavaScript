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


})

document.addEventListener("click", function (e){
    a_parent.forEach((item) => {
       
    })
})

sub.forEach((item) => {

   item.addEventListener('click', function(e){ 
    item.classList.toggle('active')
    console.log(e.target)
   })
})


