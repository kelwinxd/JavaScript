document.addEventListener("scroll", () => {
    const section = document.querySelector(".programas");
    const bars = document.querySelectorAll(".bar");
  
    // Calcula a posição da seção em relação à janela de visualização
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.getBoundingClientRect().height;
  
    // Inicia a animação apenas quando a seção está totalmente visível
    if (sectionTop < window.innerHeight - sectionHeight / 4) {
      bars.forEach((bar, index) => {
        setTimeout(() => {
          bar.classList.add("grow");
        }, index * 200); // Delay de 200ms entre cada barra
      });
  
      // Remove o listener para que a animação aconteça apenas uma vez
      document.removeEventListener("scroll", arguments.callee);
    }
  });