const hashtagInput = document.querySelector('#te')




const ar = []
hashtagInput.addEventListener('keydown', (event) => {
     if(event.key == " " && hashtagInput.value.trim() != ""){
        
        const words = hashtagInput.value.split(' ');
       
        const lastWord = words[words.length - 1];
        console.log(lastWord)
        if(lastWord != " "){
            const newValue = words.slice(0, -1).join(' ') + ' #' + lastWord;
      
            hashtagInput.value = newValue;

        } else {
            const newValue = words.slice(0, -1).join(' ') + ' #' + lastWord;
            hashtagInput.value = newValue.replace(/#/g, "")
        }

       
       
     }

})