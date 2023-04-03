function mostrarPopup(titulo, texto) {
    // Crie um elemento de pop-up
    var popup = document.createElement("div");
    popup.className = "popup";
    
    // Crie um elemento de título
    var tituloElem = document.createElement("h1");
    tituloElem.innerHTML = titulo;
    
    // Crie um elemento de texto
    var textoElem = document.createElement("p");
    textoElem.innerHTML = texto;
    
    // Adicione o título e o texto ao pop-up
    popup.appendChild(tituloElem);
    popup.appendChild(textoElem);
    
    // Adicione o pop-up à página
    document.body.appendChild(popup);
    
    // Adicione um evento de clique ao documento inteiro
    document.addEventListener("click", function(evento) {
      if (evento.target == popup) {
        popup.parentNode.removeChild(popup);
        document.removeEventListener("click", arguments.callee);
      }
    });
  }
  