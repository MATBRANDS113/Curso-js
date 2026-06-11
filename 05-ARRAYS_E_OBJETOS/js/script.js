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

// 8 - conhecendo melhor os objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));
console.log(Object.entries(car));

// 9 - Mutação
const a = {
    name: 'Matheus'
}

const b = a

console.log(a)
console.log(b)

a.age = 15

console.log(b)

delete b.age

console.log(a)
console.log(b)

// 10 - Loop em array
const users = ['Matheus', 'João', 'Ana', 'Pedro'];
for (let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário ${users[i]}`);
}

// 11 - Push e pop

const array = ["a", "b", "c"]
array.push("d")
console.log(array)
array.pop()
console.log(array)
array.pop()
console.log(array)
array.push("z", "a")
console.log(array)