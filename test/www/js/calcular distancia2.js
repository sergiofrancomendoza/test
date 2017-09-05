/* variable objeto x*/
let max1 = 19;
let min1 = 5;
/* variable objeto y*/
let max2 = 19;
let min2 = 5;
/* variable objeto2 x*/
let fin = 19;
let inicio = 5;
/* variable objeto2 y*/
let fin2 = 19;
let inicio2 = 5;

let object = {
    x: Math.round(Math.random() * (max1 - min1) + min1),
   
    y: Math.round(Math.random() * (max2 - min2) + min2)
};
let object2 = {
    x2:  Math.round(Math.random() * (fin- inicio) + inicio),
   
    y2:  Math.round(Math.random() * (fin2 - inicio2) + inicio2)
}; 
 const D= Math.round(Math.sqrt((object2.x2 - object.x)^2 + (object2.y2 - object.y)^2));
 if(D>=0){
console.log("La distancia es =" + D);
 }
 else{

    alert(`error`);
 }