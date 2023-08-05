
const inputCEP = document.querySelector('#cep')

const Btn = document.querySelector('#btn')


window.addEventListener('DOMContentLoaded', () => {
    inputCEP.focus()
    
})


function handleFetch(event){
     event.preventDefault()
     const CEP = inputCEP.value.toString()
     
     const editedCEP = CEP.replace("-","")
     setTimeout(() => {
        fetch(`https://viacep.com.br/ws/${editedCEP}/json/`)
        .then(r => r.json()).then(r => {
            document.querySelector('#neigh').textContent = r.bairro
            document.querySelector('#local').innerText = r.localidade

            document.querySelector('#UF').textContent = r.uf
            
         

        }).catch(rej => { document.querySelector('#neigh').innerText = 'CEP não encontrado'
        document.querySelector('#local').innerText = "CEP não encontrado"

        document.querySelector('#UF').textContent = "CEP não encontrado"
        
    console.log(rej) })
        

        
        
     }, 1000)
    
}




Btn.addEventListener('click', handleFetch)


