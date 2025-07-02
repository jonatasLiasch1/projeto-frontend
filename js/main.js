document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem");

  const erro = validarUsuario(nome, email);

  if (erro) {
    mensagem.textContent = erro;
    mensagem.classList.remove("sucesso");
  } else {
    mensagem.textContent = "Usuário cadastrado com sucesso!";
    mensagem.classList.add("sucesso");
  }
});