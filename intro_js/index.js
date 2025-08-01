// Declarando e impressão de variavel
var nome = "matheus";//Cria espaço na memoria (escopo global).
let idade = 25; //são escopadas(so pode se excutada dentro do bloco de codigo usada).
const documento = "123abc";// são escopada (uma vez que recebe valor,não pode ser alterado).

//(console.log: é nosso terminal, e o .log é uma funcionalidade para imprimir a mensagem).
console.log (nome + "  " + idade + "  " + documento);//concatenação mais ruim (bagunçada).
console.log(`${nome} ${idade}  ${documento}`);

// = atribuição. 
// == comparação simples "1" é igual a 1.
// === cmparação tipada, ou identico 1 é igual a 1.

//criando op matematicas basicas.
let soma = idade + 5;
let subt = idade - 10;
let divi = idade / 2;
let mult = idade * 3;

console.log(`${soma} ${subt} ${divi} ${mult} `);//resolveu as operações matematicas definidas.


//atividade

let raiz = Math.sqrt(25);//formula raiz quadrada.
console.log(raiz);
