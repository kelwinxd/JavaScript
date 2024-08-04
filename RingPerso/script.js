const Select = document.querySelector('.imgSelect')
const Model = document.querySelector('.model')
const RadioS = document.getElementById('psim')
const RadioN = document.getElementById('pnao')
const path = './imgs/'

Select.addEventListener('change', () => {
    const value = Select.value

    Model.src = value
})

RadioS.addEventListener('change', () => {
    console.log('mudou')
    if(Model.src == (path + 'ringreta.glb')){
  Model.src = path + 'ringretacompedra.glb'
  console.log('reta com pedra')
    }
   

})

RadioN.addEventListener('change', () => {
   if(Model.src == (path + 'ringretacompedra.glb')){
    Model.src = path + 'ringreta.glb'
    console.log('reta sem pedra')
   }

})

