// Adiciona um evento de clique no documento para fechar o dropdown quando o usuário clicar em qualquer lugar fora do dropdown
document.addEventListener("click", function(e) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const dropdown = dropdowns[i];
      if (dropdown.style.display === "block" && !dropdown.contains(e.target)) {
        dropdown.style.display = "none";
      }
    }
  });
  
  // Adiciona um evento de clique nos itens dropdown para exibir/ocultar o dropdown
  const dropdownItems = document.getElementsByClassName("dropdown");
  for (let i = 0; i < dropdownItems.length; i++) {
    const dropdownItem = dropdownItems[i];
    const dropdownContent = dropdownItem.querySelector(".dropdown-content");
    dropdownItem.addEventListener("click", function() {
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
  