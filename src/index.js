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
document.getElementById("ayuda").addEventListener("click", ayudame);
function ayudame(){
  alert("Queridos Encoders/Decoders antes que alguien les pregunten ¿¿¿¿¿¿DULCE O TRUCO?????? y ya sea que escojas -->DULCE O TRUCO<--  les invito a leer las instrucciones para poder usar nuestro cifrado cesar: 1) Clave: aca debes escribir el numero de letras que quieras recorrer para poder cifrar o descifrar tu mensaje --> por ejemplo : si colocas abc clave 3 obtendras def. 2)En <<Escribe tu mensaje>>  debes poner el mensaje que quieras encriptar o desencriptar y ya sea que quieras encriptar o desencriptar solo debes hacer click al boton <<ENCRIPTAR>> o <<DESENCRIPTAR>> y whola en el cuadrado mas oscuro tendras tu resultado! :D !!! Espero te haya gustado gracias por probar el mapa del merodeador encriptador, si no sabes lo que es --->el mapa del merodeador<--- te invito  ver Harry Potter:D!!!")
}