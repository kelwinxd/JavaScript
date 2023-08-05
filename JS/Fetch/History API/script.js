const links = document.querySelectorAll('a')


//Função primária
function Hclick(event){
    event.preventDefault()
    
    

    


    fetchPage(event.target.href)
    window.history.pushState(null,null,event.target.href)
}


//Faz o fetch do href do link e transforma em texto
//ao mesmo tempo que roda a função replaceContent
async function fetchPage(url){
    const fetchURL = await fetch(url)
    const URLres = await fetchURL.text()
    replaceContent(URLres)
}


//cria uma div, adiciona o conteudo do texto anterior a essa div
//pega o content anterior e muda para o novo
function replaceContent(text){
     const newHtml = document.createElement('div')
     newHtml.innerHTML = text
    const oldContent = document.querySelector('.content')
    const newContent = newHtml.querySelector('.content')
    oldContent.innerHTML = newContent.innerHTML
    document.title = newHtml.querySelector('title').innerText
}


//popstate é quando se avança ou volta na página
//aqui, quando voltar ou ir, ativará a função fetch
window.addEventListener('popstate', () => {
    fetchPage(window.location.href)
})



links.forEach((l) => {
   
    l.addEventListener('click', Hclick)
     l.addEventListener('click', (event) => {
        links.forEach((item) => {
            item.classList.remove("ativo")
        })
        event.target.classList.add('ativo')
        
     })
    //Hclick > fetchPage > replaceContent
})