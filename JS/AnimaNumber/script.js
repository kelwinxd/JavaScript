const numeros = document.querySelectorAll('.numb');
  
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const inscremento = Math.floor(total / 10);
      let start = 0;
      const timer = setInterval(() => {
        start = start + inscremento;
        numero.innerText = start;
        if(start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 150 * Math.random());
    });