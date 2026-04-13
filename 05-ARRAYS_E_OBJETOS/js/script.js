// 1 Arrays
const lista = [1, 2, 3, 4, 5]

console.log(lista)

console.log(typeof lista)

const itens = ["Matheus", true, 2, 2.314, []]
console.log(itens)

// 2 Mais sobre arrays
const arr = ["a", "b", "c", "d"]

console.log(arr[3])

// 3 Propriedades
const numbers = [5, 3, 4, 7]

console.log(numbers.length);
console.log(numbers["length"]);

const myName = "Matheus Brands"

console.log(myName.length)

// 4 - Metodos
const otherNumbers = [1, 2, 3]

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers)

const text = "alguma coisa"

console.log(text.toUpperCase())

console.log(typeof text.toUpperCase)

console.log( text.indexOf("m"))



// 5 - Objetos
const person = {
    name: "Matheus",
    age: 22,
    job: "Desenvolvedor de software"
}

console.log(person)
console.log(person.age)
console.log(person.name.length)

// 6 - Criando e deletando propriedades
const car = {
    engine: 1.8,
    color: "black",
    led: "purple",
    brand: "civic",
    model: "Type R"
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.led;
console.log(car);

//7- Mais sobre objetos
const obj = {
    a: "Teste",
    b: true,
};

console.log(obj instanceof Object);

const obj2 = {
    c: []

}
Object.assign(obj2, obj)
console.log(obj2)