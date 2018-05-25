const botton = document.getElementById("encode").addEventListener("click", encriptacionCesar);
function encriptacionCesar()
{
  var textoEncriptado = cipher.encode();
  document.getElementById("textoEncriptado").value = textoEncriptado;

}
