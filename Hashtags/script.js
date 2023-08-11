const input = document.querySelector("#hash")
const btn = document.querySelector("#sub")
const out = document.querySelector('.out')
console.log(input, btn)

btn.addEventListener("click", (event) => {
    event.preventDefault()
    const value = input.value.toString()
    if(!value){
        alert('Please enter a valid hash')
        return
    }
    const Tag = document.createElement('div');
    Tag.classList.add('tag-item');
    
    const arrayValue = value.split(' ');
    
    arrayValue.forEach(item => {
      const tagElement = document.createElement('div');
      tagElement.classList.add('tag-item'); // Adiciona uma classe para cada tag
      tagElement.textContent = '#' + item;
      Tag.appendChild(tagElement);
    });
    
    out.appendChild(Tag);
    input.value = ''
})