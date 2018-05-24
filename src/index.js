document.getElementById("decode").addEventListener("click", encriptacionCesar);
function encriptacionCesar()
{
  var textoEncriptado = cipher.decode();
  document.getElementById("textoEncriptado").value = textoEncriptado;

}
