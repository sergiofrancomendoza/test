function platsom(str){
    let translation = str;

    if(str.toLowerCase().endsWith('ar')){
        translation = str.slice(0,-2)// recorre todo el string y despues se regresa 2 posiciones
    }
    


// si la palabra incia con z: se le añade los caracteresres "pe" al final de la palabra+
if(str.toLowerCase().startsWith('z')){
    translation += 'pe'
}
//si la palabra traducida tiene mas de 10 o mas letras se debe partir a la mitad y unir con un guion

//var mensaje ="programandores";
//var numeroLetras = mensaje.length;

//if(mensaje>=10){
    /* primera parte de cadena */   
  //  inicio = 0,
    //fin    = /*math.round*/(numeroLetras/2),
   // subCadena = mensaje.substring(inicio, fin);
    /* segunda cadena a la mitad */
    //subCadena2 = mensaje.substring(fin);   

//console.log(subCadena+"-"+subCadena2); // la consola devolverá: cadena de texto




/*si la palabra original es un palindromo, ninguna de las anteriores funciona reglas funciona y 
se devuelve la palabra intercalardo entre mayusculas y minusculas*/
const reverse = (str) => str.split('').reverse.join('') 

fuction minMay(){

}


if(str = reverse(str)){
    return minMay(str);
 }