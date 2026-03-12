// 1 - criando uma função]

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

// 4 - Escopo aninhado
let m = 40

function escopoAninhado() {
    let m = 30

    if(true) {
        let m = 20
        
    
    if(true) {
        let m = 10
        console.log(m)
    }

    console.log(m)
}
console.log(m)
}
escopoAninhado();

console.log(m)

// 5- arrow function
const testeFunction = () => {
    console.log("Está é uma arrow function")
};

testeFunction();

const parOuImpar = (j) => {
    if(j % 2 === 0) {
        console.log("Par")
        return
    }
    
    console.log("Impar")
    
    
}
    parOuImpar(8);

    parOuImpar(10);

    // 6 Mais sobre arrow functions
    const raizQuadrada = (x) => {
        return x * x
    }
    console.log(raizQuadrada(9));

    const raizQuadrada2 = (y) => y * y
    console.log(raizQuadrada2(8))

    console.log(raizQuadrada2(4))

    // 7 - parametros opcionais
    const multiplication = function(m, n) {
        if(n === undefined){
            return m * 2
        } else{
           return m * n
        }
    }
    console.log(multiplication(5))
    console.log(multiplication(2, 3))

    const greeting = (name) => {
        if(!name){
            console.log("olá")
            return
        }
        console.log(`Olá ${name}`)

        }
        greeting("Matheus")
        greeting()

    const customGreeting = (name, greet = "olá") => {
        return `${greet}, ${name}`
    }

    console.log(customGreeting("Matheus",))

    console.log(customGreeting("João", "Bom dia"))

    const repeatText = (text, repeat = 2) => {
        for(let i = 0; i < repeat; i++)
            console.log(text)
    }

    repeatText("Repete 3 vezes", 3)

    // 9 closure

    function someFunction() {
        let txt = "alg coisa"

        function display() {
            console.log(txt)
        }
        display()
    }

    someFunction();

    // 10- Mais sobre closure
    const multiplicationClosure = (n) => {
        return (m) => {
            return n * m
        }
    }
    const c1 = multiplicationClosure(5)


    const c2 = multiplicationClosure(10)

    console.log(c1)
    console.log(c2)

    console.log(c1(5))
    console.log(c2(10))

    // 11- Recursão

    const untilTen = (n, m) => {
        if(n < 10) {
            console.log("A função parou de funcionar")
            
        } else{
            const x = n - m 
            console.log(x)
            untilTen(x, m)
            }
        }

untilTen(100, 7)

function factorial(x) {
    if(x === 0) {
        return 1
    } else{
        return x * factorial(x - 1)
    }
}

const num = 5

const result = factorial(num)

console.log(`O resultado do Número ${num} é ${result}`)

    