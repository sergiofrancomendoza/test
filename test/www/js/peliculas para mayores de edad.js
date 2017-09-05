
var min = 17;
var max = 17;
var edad = (Math.round(Math.random() * (max - min) + min));

var min2 = 2;
var max2 = 2;
var acompañado=(Math.round(Math.random() * (max - min) + min));

if(edad>=18){
console.log(edad+` años puede pasar es mayor de edad`);
}
else{     
    if(acompañado=1){
            console.log(`${acompañado}El menor de edad esta acompañado, puede pasar`);
            }else{   
                console.log(`${acompañado}El menor de edad no esta acompañado, no puede pasar`);      
    }
}