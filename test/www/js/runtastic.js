const nombre ="sergio"

const dias = [
"lunes",
"martes",
"miercoles",
"jueves",
"viernes",
"sabado",
"domingo",
]

function promedioCorrer(){
const min = 5
const max = 15

return Math.round(Math.random(5,15) * (max - min) + min)
}

let totalKms = 0
const length = dias.length

for(let i = 0; i<length; i++){
const kms = promedioCorrer()
totalKms += kms
console.log(`el dia ${dia[i]}, ${nombre} corrio ${kms} kms`)
}

const promedioKms = totalKms / length

console.log(`En promedio, ${nombre} corrio ${promedioKms.tofixed(2)} kms, en la semana`)
}