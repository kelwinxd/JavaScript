
// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const Par = document.querySelectorAll('p')

const arrayPar = Array.from(Par)

const charSum = arrayPar.reduce((counter,i) => {
    return counter + i.innerText.length
},0)

//ou--------------
// Call + Reduce

const SumCall = Array.prototype.reduce.call(Par,(counter,item) => {
    return counter + item.innerText.length
},0)

console.log("Apenas com Reduce: " + charSum, "Reduce + Call: " + SumCall )



// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function createEl(tag,classe,content){
   const El = document.createElement(tag)
   //Para não dar undefined verifica se existe, caso n exista blz
   classe ? El.classList.add(classe) : null
   content ? El.innerHTML = content : null
   return El
}

const Sec = document.querySelector("section")
const Htmltest = createEl("div","red","hello world")


Sec.appendChild(Htmltest)

///---------ou

Sec.innerHTML += Htmltest.outerHTML







// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const hTi = createEl.bind(null,'h1','titulo')


const Kelwin = hTi('Kelwin Testando poha')
Sec.appendChild(Kelwin)
console.log(Sec)





