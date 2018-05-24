window.cipher = {
  encriptacionCesar : () => {
    var clave = 3
    var textoOriginal = document.getElementById("textoOriginal").value;
    var textoEncriptado = "";

    for (var i=0; i<textoOriginal.length;i++)
    {
      let posLetra = textoOriginal.charCodeAt(i);
      let newPosLetra = (posLetra - 65 + clave) % 26 + 65;
  		textoEncriptado += String.fromCharCode(newPosLetra);
    }
    return textoEncriptado;
  }

};
