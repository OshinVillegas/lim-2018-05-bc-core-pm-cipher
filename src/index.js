document.getElementById("encode").addEventListener("click", codificacion);
function codificacion()
{

  var textoEncriptado = cipher.encode();
  document.getElementById("solucion").value = textoEncriptado;
}
document.getElementById("decode").addEventListener("click", decodificacion);
function decodificacion()
{
  var desencriptado = cipher.decode();
  document.getElementById("textoDesencriptado").value = desencriptado;
}

document.getElementById("decode").addEventListener("click", decodificacion);
function decodificacion()
{
  var desencriptado = cipher.createCipherWithOffset();
  document.getElementById("textoDesencriptado").value = desencriptado;
}
