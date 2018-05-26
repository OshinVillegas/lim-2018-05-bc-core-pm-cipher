window.cipher = {
  encode : () => {
    var llave = parseInt(document.getElementById('candado').value);
    var textoOriginal = document.getElementById("textoOriginal").value;
    var textoEncriptado = "";

    for (var i=0; i<textoOriginal.length; i++)
    {
      let Posletra = textoOriginal.charCodeAt(i);
      let newPosLetra = (Posletra - 65 + llave) % 26 + 65;
  		textoEncriptado += String.fromCharCode(newPosLetra);
    }
    return textoEncriptado;
  },
  decode:() => {
    var llave = parseInt(document.getElementById('candado').value);
    var solucion = document.getElementById("solucion").value ;
    var desencriptado = "";

    for (var i=0; i<solucion.length; i++)
    {
      let Posletra = solucion.charCodeAt(i);
      let newPosLetra = (Posletra - 65 - llave) % 26 + 65;
      desencriptado += String.fromCharCode(newPosLetra);
    }
    document.getElementById("textoDesencriptado").value;
    return desencriptado;
  },
  createCipherWithOffset : () =>{
    var llave = parseInt(document.getElementById('candado').value);
    var solucion = document.getElementById("solucion").value ;
    var desencriptado = "";

    for (var i=0; i<solucion.length; i++)
    {
      let Posletra = solucion.charCodeAt(i);
      let newPosLetra = (Posletra - 65 - llave) % 26 + 65;
      desencriptado += String.fromCharCode(newPosLetra);
    }
    document.getElementById("textoDesencriptado").value;
    return desencriptado;
  }

};
