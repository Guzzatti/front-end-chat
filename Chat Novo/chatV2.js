document.getElementById("user-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    enviarMensagem();
  }
});

function enviarMensagem() {
  var userInput = document.getElementById("user-input");
  var mensagem = userInput.value.trim();

  if (mensagem !== "") {
    adicionarMensagem("usuario", mensagem);
    userInput.value = ""; 
    setTimeout(function() {
      adicionarMensagem("atendente", "Resposta do chat...");
    }, 1000);
  }
}

function adicionarMensagem(tipo, texto) {
  var chatBox = document.getElementById("chat-box");
  var mensagemElement = document.createElement("div");
  mensagemElement.classList.add("mensagem", "bg-blue-500", "text-white", "rounded-lg", "p-3", "max-w-md");
  if (tipo === "usuario") {
    mensagemElement.classList.remove("bg-blue-500");
    mensagemElement.classList.add("bg-gray-200", "text-gray-800", "self-end");
  }
  mensagemElement.textContent = (tipo === "usuario" ? "Você diz: " : "Atendente diz: ") + texto;
  chatBox.insertBefore(mensagemElement, chatBox.firstChild);
  chatBox.scrollTop = chatBox.scrollHeight; 
}

function limparHistorico() {
  var chatBox = document.getElementById("chat-box");
  chatBox.innerHTML = ''; 
}
