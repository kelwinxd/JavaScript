class SuaClasse {
    constructor(input) {
      this.background = "red"; // cor de fundo padrão
      this.width = 200; // largura padrão
      this.height = 100; // altura padrão
      this.inputRange = input;
  
      // Configurar o input range para controlar a borda da div
      this.inputRange.addEventListener("input", () => {
        const valorRange = this.inputRange.value; // valor do input range
        this.divTarget.style.borderRadius = `${valorRange}px`;
      });
    }
  
    element() {
      this.divTarget = document.createElement('div');
  
      this.divTarget.style.backgroundColor = this.background;
      this.divTarget.style.width = this.width + 'px';
      this.divTarget.style.height = this.height + 'px';
  
      // Adicionar o input range à div
      this.divTarget.appendChild(this.inputRange);
  
      return this.divTarget;
    }
  }
  
  // Obtenha o input já criado pelo seu código ou pelo DOM
  const seuInput = document.getElementById('range');
  
  // Crie a instância da classe, passando o input como argumento
  const suaInstancia = new SuaClasse(seuInput);
  document.body.appendChild(suaInstancia.element());
  