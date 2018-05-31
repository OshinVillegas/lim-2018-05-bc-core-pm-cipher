document.getElementById("encode").addEventListener("click", codificacion);
function codificacion()
{
  var llave = parseInt(document.getElementById('candado').value);
  var textoOriginal = document.getElementById("textoOriginal").value;
  var textoEncriptado = cipher.encode(llave,textoOriginal);
  document.getElementById("solucion").value = textoEncriptado;
}
document.getElementById("decode").addEventListener("click", decodificacion);
function decodificacion()
{
  var llave = parseInt(document.getElementById('candado').value);
  var textoOriginal = document.getElementById("textoOriginal").value;
  var desencriptado = cipher.decode(llave,textoOriginal);
  document.getElementById("solucion").value = desencriptado;
}
