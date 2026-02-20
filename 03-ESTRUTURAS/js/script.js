/*
// 1 variaveis
let nome = "Matheus"

console.log(nome)

nome = "Matheus Brands"

console.log(nome)

const idade = 14
console.log(idade)

console.log(typeof nome, typeof idade)

// 2 - mais sobre variaveis
// let 2teste = "inválido"
// let @teste = "inválido"
let a = 10, b = 20, c = 30
console.log(a, b, c)
let _teste = "válido"
let $teste = "válido"
console.log($teste, _teste)

// 3 - prompt
// const age = prompt("Digite sua idade:")

// console.log(`Você tem ${age} anos`)



// 4 - Alert
alert("testando")

const z = 10;

alert(`O número é ${z}`);
*/
// 5 - Object Math
/*
console.log(Math.max(5, 2, 1, 10))


console.log(Math.floor(5.34))

console.log(Math.ceil(5.20))

// 6 - console
console.log("teste")

console.error("erro!")

console.warn("teste")

// 7 - IF
const borboleta = 10;
if(borboleta > 11){
    console.log("Borboleta é maior q 5")

}

const user = "João"

if(user === "João"){
    console.log("Olá João")

}
else{
    console.log("Tchau")
}

// 8- Else
const loggedIn = false
if(loggedIn){
    console.log("Está autenticado")
} else{
    console.log("Não está autenticado")
}

const q = 10
const w = 15

if(q > 5 && w > 20){
    console.log("Números mais altos")
} else{
    console.log("Os números nn são mais altos")

}

// 9 - ELSE IF 
const mat = 10
if(2 > mat){
    console.log("1")
} else if(10 === mat) {
    console.log(2)
} else if(20 > mat) {
    console.log(3)
}
*/

// 10- Estruturas de repetição -While
/*
let p = 0

while(p < 10){
    console.log(`repetindo ${p}`);
    p = p + 1

}

// 11 - do while
let x = 10
do{
    console.log(`valor de x: ${x}`);
    x--
} while(x > 1)
*/

// 12 - for
for (let t = 0; t < 10; t++ ) {
    console.log("repetindo algo...");
}
let r = 10

for (r; r > 0; r = r - 1) {
    console.log(`O r está diminuindo: ${r}`);
}

// 13 - identação
for (let u = 0; u < 10; u++){
if (u * 2 > 10){
console.log(`maior que 10! ${u}`)
} else {
if(u / 2 === 0){
    console.log(`deu zero`)
}
}
}
// 14 - break
for(let g = 20; g > 10; g--) {
    console.log(`O valor de g é: ${g}`)


if (g === 12){
    console.log(`O g é: ${g}`);
    break;
}
}

// 15 - continue
for(let s = 0; s < 10; s = s + 1){
    if (s % 2 === 0){
        console.log(`Numero par!`)
        continue
    }
    console.log(s)
}

// 16 - switch
let job = "Advogado";

switch (job) {
    case "Programador":
        console.log("você é um programador")
        break;
    case "engenheiro":
        console.log("Você é um engenheiro")
        break
    case "Advogado":
        console.log("Você é um advogado")
        break
    default:
        console.log("Profissão nn encontrada")
        
}






