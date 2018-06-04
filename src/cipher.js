window.cipher = {
  //Funcion encode que recibe offset Llave y string textoOriginal y retorna el texto encriptado
  encode : (llave, textoOriginal) => {
    let textoEncriptado = "";

    //Recorre letra a letra el texto original 
    for (let i=0; i<textoOriginal.length; i++)
    {
      //Obtener el codigo ASCII de la letra original
      let Posletra = textoOriginal.charCodeAt(i);
      let newPosLetra = Posletra;
      
      if (Posletra >= 65 && Posletra <= 90)  //Si es letra mayuscula
      {
        newPosLetra = (Posletra - 65 + llave) % 26 + 65;
      }
      if (Posletra >= 97 && Posletra <= 122) //Si es letra minuscula
      {
        newPosLetra = (Posletra - 97 + llave) % 26 + 97;
      }
      //Agrega la letra encriptada
      textoEncriptado += String.fromCharCode(newPosLetra);
    }
    return textoEncriptado;
  },
  //Funcion decode que recibe offset Llave y string textoOriginal y retorna el texto desencriptado
  decode:(llave, textoOriginal) => {
    let desencriptado = "";
  //Retrocede letra a letra el texto original 
    for (let i=0; i<textoOriginal.length; i++)
    {
   //Obtener el codigo ASCII de la letra original

      let Posletra = textoOriginal.charCodeAt(i);
      let newPosLetra = Posletra;
      if (Posletra >= 65 && Posletra <= 90) //Si es letra mayuscula
      {
        newPosLetra = (Posletra + 65 - llave) % 26 + 65;
      }
      if (Posletra >= 97 && Posletra <= 122)//Si es letra minuscula
      
      {
        newPosLetra = (Posletra + 85 - llave) % 26 + 97;
      }
            //Agrega la letra desencriptada
      desencriptado += String.fromCharCode(newPosLetra);
    }
      
    return desencriptado;
  },
  //Funcion createCipherWithOffset que recibe offset Llave y retorna un objeto con las funciones encode y decode
  createCipherWithOffset: (llave)=>{
    let objeto = {
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
