const Select = document.querySelector('.imgSelect')
const Model = document.querySelector('.model')
const RadioS = document.getElementById('psim')
const RadioN = document.getElementById('pnao')
const path = './imgs/'
const names = ['ringreta','ringchanf','ringbal']
const End = document.querySelector('.toend')

let Pedra = false

Select.addEventListener('change', () => {
    const value = Select.value
   if(Pedra){
    Model.src = path + value + 'compedra.glb'
   }
   else {
Model.src = path + value + '.glb'
   }

   Update(Model.src)
    
})

RadioS.addEventListener('change', () => {
    console.log('mudou')
    if(Model.src == (path + 'ringreta.glb')){
  Model.src = path + names[0] + 'compedra.glb'
  console.log('reta com pedra')
  Pedra = true
  
    }
    else if(Model.src == (path + 'ringchanf.glb')){
        Model.src = path + names[1] + 'compedra.glb'
        Pedra = true
    }
    Update(Model.src)

})

RadioN.addEventListener('change', () => {
   if(Model.src == (path + 'ringretacompedra.glb') ){
    Model.src = path + 'ringreta.glb'
    console.log('reta sem pedra')
    Pedra = false
   }
   else if (Model.src == (path + 'ringchanfcompedra.glb')){
    Model.src = path + 'ringchanf.glb'
    Pedra = false
   }
   Update(Model.src)
})


function Update(some){
      if (some == path + 'ringreta.glb'){
        End.href = 'google.com'
      }
      else if (some == path + 'ringretacompedra.glb'){
        End.href = 'amazon.com'
      }

      else if (some == path + 'ringchanf.glb'){
        End.href = 'chanfrada'
      }
      
      else if (some == path + 'ringchanfcompedra.glb'){
        End.href = 'chanfrada com pedra'
      }
}

