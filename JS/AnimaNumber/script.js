const numb = document.querySelectorAll('.numb')

numb.forEach((item) => {
    const total = +item.textContent
   
    let start = 0
    
    const timer = setInterval(() => {
        start = start + Math.floor(((10 / 100) * total))
        item.textContent = start
        if(start == total){
            clearInterval(timer)
        }

    }, 120);
})

