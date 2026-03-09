// 1 - criando uma função
function minhaFuncao() {
    console.log("Testando")
}
minhaFuncao();

const minhaFuncaoEmVariavel = function () {
    console.log("Testando minha função em variavel")
}
minhaFuncaoEmVariavel();

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`)
}

funcaoComParametro("Imprimindo alguma coisa")

funcaoComParametro("Outra coisa")

// 2 - return
const a = 10
const b = 20
const c = 30
const d = 40

function somandoValores(n1, n2){
    return n1 + n2;
}
const resultado = somandoValores(a, b)

console.log(resultado)

// 3-Escopo da função
let y = 10

function testandoEscopo() {
    let y = 20
    console.log(`Y dentro da função é: ${y}`)
    
}


console.log(`Y fora da função é: ${y}`)

testandoEscopo();