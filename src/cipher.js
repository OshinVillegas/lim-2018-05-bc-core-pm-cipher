window.cipher = {
  encode : (llave, textoOriginal) => {
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
  decode:(llave, textoOriginal) => {
    var desencriptado = "";

    for (var i=0; i<textoOriginal.length; i++)
    {
      let Posletra = textoOriginal.charCodeAt(i);
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

    return desencriptado;
  },
  //Funcion createCipherWithOffset que recibe offset Llave y retorna un objeto con las funciones encode y decode
  createCipherWithOffset: (llave)=>{
    var objeto = {
      // Funcion encode que recibe string texto original y retorna el texto encriptado
      encode(textoOriginal){
        let encriptado = "";
        encriptado = cipher.encode(llave,textoOriginal);
        return encriptado;
      },
      // Funcion encode que recibe string texto original y retorna el texto desencriptado
      decode(textoOriginal){
        let desencriptado = "";
        desencriptado = cipher.decode(llave,textoOriginal);
        return desencriptado;
      }
    }
    return objeto; //Devuelve el objeto
  }
};
