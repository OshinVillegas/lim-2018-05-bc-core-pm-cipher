window.cipher = {
  encode : () => {
    var clave = 3
    var textoOriginal = document.getElementById("textoOriginal").value;
    var textoEncriptado = "";

    for (var i=0; i<textoOriginal.length;i++)
    {
      let x = textoOriginal.charCodeAt(i);
      let newPosLetra = (x - 65 + clave) % 26 + 65;
  		textoEncriptado += String.fromCharCode(newPosLetra);
    }
    return textoEncriptado;
  }

};
