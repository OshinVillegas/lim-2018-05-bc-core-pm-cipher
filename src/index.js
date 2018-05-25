document.getElementById("encode").addEventListener("click", codificacion);
function codificacion()
{
  var textoEncriptado = cipher.encode();
  document.getElementById("solucion").value = textoEncriptado;
}
document.getElementById("decode").addEventListener("click", decodificacion);
function decodificacion(){
    var llave = parseInt(document.getElementById('candado').value);
    var solucion = document.getElementById("solucion").value;
    var desencriptado = "";

    for (var i=0; i<solucion.length; i++)
    {
      let Posletra = solucion.charCodeAt(i);
      let newPosLetra = (Posletra - 65 - llave) % 26 + 65;
      desencriptado += String.fromCharCode(newPosLetra);
    }
    document.getElementById("textoDesencriptado").value = desencriptado;
}
