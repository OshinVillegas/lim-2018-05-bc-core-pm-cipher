document.getElementById("encriptacionCesar").addEventListener("click", encriptacionCesar);
function encriptacionCesar()
{
  var textoEncriptado = cipher.encriptacionCesar();
  document.getElementById("textoEncriptado").value = textoEncriptado;

}
