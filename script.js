function mostrarMensagem(evento) {
    evento.preventDefault();

    let nome = document.getElementById("nome").value; 
    let mensagem = document.getElementById("mensagemSucesso");

    if (nome == "") {
        mensagem.textContent = "Por favor, digite seu nome antes de enviar.";
        mensagem.style.color = "red"; 
    } else {
        mensagem.textContent = "Obrigado pelo contato, " + nome + "!";
        mensagem.style.color = "green";
    }
}

let formulario = document.getElementById("meuFormulario");
formulario.addEventListener("submit", mostrarMensagem);