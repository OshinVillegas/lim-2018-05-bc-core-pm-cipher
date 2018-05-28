window.cipher = {
  encode : () => {
    var llave = parseInt(document.getElementById('candado').value);
    var textoOriginal = document.getElementById("textoOriginal").value;
    var textoEncriptado = "";

    for (var i=0; i<textoOriginal.length; i++)
    {
      let Posletra = textoOriginal.charCodeAt(i);
      let newPosLetra = 0;
      if (Posletra >= 65 && Posletra <= 90)
      {
        newPosLetra = (Posletra - 65 + llave) % 26 + 65;
      }
      else if (Posletra >= 97 && Posletra <= 122)
      {
        newPosLetra = (Posletra - 97 + llave) % 26 + 97;
      }
      else
      {
        newPosLetra = Posletra;
      }
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
      let newPosLetra = 0;
      if (Posletra >= 65 && Posletra <= 90)
      {
        newPosLetra = (Posletra + 65 - llave) % 26 + 65;
      }
      else if (Posletra >= 97 && Posletra <= 122)
      {
        newPosLetra = (Posletra + 85 - llave) % 26 + 97;
      }
      else
      {
        newPosLetra = Posletra;
      }

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
      let newPosLetra = 0;
      if (Posletra >= 65 && Posletra <= 90)
      {
        newPosLetra = (Posletra + 65 - llave) % 26 + 65;
      }
      else if (Posletra >= 97 && Posletra <= 122)
      {
        newPosLetra = (Posletra + 85 - llave) % 26 + 97;
      }
      else
      {
        newPosLetra = Posletra;
      }

      desencriptado += String.fromCharCode(newPosLetra);
    }
    document.getElementById("textoDesencriptado").value;
    return desencriptado;

  }

};
0
