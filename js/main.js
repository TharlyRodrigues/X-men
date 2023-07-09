const personagens = document.querySelectorAll(".personagem");
personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    const personagensSelecionados = document.querySelector(".selecionado");
    personagensSelecionados.classList.remove("selecionado");
    personagem.classList.add("selecionado");

    const imagemPersonagemGrande = document.querySelector(".personagem-grande");

    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `imagens-xmen/card-${idPersonagem}.png`;

    const nomePersonagem = document.getElementById("nome-personagem");
    nomePersonagem.innerText = personagem.getAttribute("data-name");

    const descricaoPersonagem = document.getElementById("descricao-personagem");
    descricaoPersonagem.innerText = personagem.getAttribute("data-description");
  });
});
