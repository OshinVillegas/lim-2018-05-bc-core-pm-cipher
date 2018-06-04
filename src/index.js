document.getElementById("encode").addEventListener("click", codificacion);
function codificacion()
{
  let llave = parseInt(document.getElementById('candado').value);
  let textoOriginal = document.getElementById("textoOriginal").value;
  let textoEncriptado = cipher.encode(llave,textoOriginal);
  document.getElementById("solucion").value = textoEncriptado;
}
document.getElementById("decode").addEventListener("click", decodificacion);
function decodificacion()
{
  let llave = parseInt(document.getElementById('candado').value);
  let textoOriginal = document.getElementById("textoOriginal").value;
  let desencriptado = cipher.decode(llave,textoOriginal);
  document.getElementById("solucion").value = desencriptado;
}
document.getElementById("ayuda").addEventListener("click", ayudame);
function ayudame(){
  alert("Amigos les invito a leer las instrucciones para poder usar La interfaz Cifrado Cesar (si no sabe que es Cifrado Cesar den click en <Cifrado Cesar> ): 1) Clave: aca debes escribir el numero de letras que quieras recorrer para poder cifrar o descifrar tu mensaje --> por ejemplo : si colocas abc clave 3 obtendras def. 2)En <<Escribe tu mensaje>>  debes poner el mensaje que quieras encriptar o desencriptar y ya sea que quieras encriptar o desencriptar solo debes hacer click al boton <<ENCRIPTAR>> o <<DESENCRIPTAR>> y whola en el cuadrado mas oscuro tendras tu resultado! :D !!! <--- te invito  ver Harry Potter:D ya que el cumpleaños tendra esa tematica!!!!!!")
}