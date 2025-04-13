// String : Representa sequencias de caracteres, como "hello" ou "123".

//"texto" - string 

//'criar uma mensagem' string

//`criar mais um texto` string template

let mensagem= "Olá, ";             // todo esse codigo é um exemplo de string
let nome = 'Paulo';
let mensagem3 = "Bem vindo ao curso";
let mensagem2 = `Olá, ${nome}. ${mensagem3} `;


console.log(mensagem + nome + ".Bem Vindo ao Curso!");
console.log(mensagem2);

// indice = 0

//P a u l o    //P=0 ; A=1 ; U=2 ; L=3 ; O=4
console.log((nome[3] = "Q"));
console.log(nome[3]);




// Number : Representa numeros, inteiros ou numeros de ponto flutuante, como 42 ou 3,14

let numero = 30;
let numero1 = -76
let decimal = 6.75

console.log(numero, numero1, decimal)
// Infinity e NaN(Not a Number)

let string = "10";  //string
let dez = 10 //number

console.log(`${string} e ${dez}`)




// Boolean : Representa um valor logico verdadeiro(true) ou falso(false).

let ligado = true // (verdedeiro = sim = 1)
let desligado = false // (falso = nao = 0)

console.log(true == 1)
console.log(false == 0)

let apelido = "Carlin"
console.log(Boolean(apelido))

let numeros = 0
console.log(Boolean(numeros))



// Null : Representa um valor nulo intencionalmente vazio

let carro = null
let lista = null
console.log(typeof lista)
console.log(carro)



// Undefinied : Reperesenta um valor indefinido, normalmente atribuido atribuido automaticamente a variaveis que nao foram inicializadas

let produto
let carrinho = undefined
console.log(typeof produto)
console.log(typeof carrinho)