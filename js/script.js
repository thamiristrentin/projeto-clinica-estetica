document.getElementById("scrollButton").addEventListener("click", function() {
    const targetSection = document.getElementById("cta");
    targetSection.scrollIntoView({
      behavior: "smooth", // Faz o scroll ser suave
      block: "center"     // Centraliza a seção na tela
    });
  });