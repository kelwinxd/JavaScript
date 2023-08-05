const numb = document.querySelectorAll('.numb')

numb.forEach((item) => {
    const total = +item.textContent
    const inc = Math.floor(total / 10)
   
    let start = 0
    
    const timer = setInterval(() => {
        start = start + inc
        item.textContent = start
        if(start > total){
            item.textContent = total
            clearInterval(timer)
        }

    }, 100 * Math.random());
})

