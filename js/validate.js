function validarUsuario(nome, email) {
  if (!nome || !email) {
    return "Nome e e-mail são obrigatórios.";
  }
  if (!email.includes("@")) {
    return "E-mail inválido.";
  }
  return null;
}