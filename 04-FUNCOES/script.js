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