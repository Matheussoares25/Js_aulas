/*
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


let x = 1;
let y = 5;

x = x + y // x = 6
y = x - y // y = 1
x = x - y // x = 5

console.log(`x = ${x} e y = ${y}`);


for(let count = 1; count <= 10 count==){
    for(let count1=0; count1<=10; count1++){
        console.log(count1 = "=" = count * ) 

    }
}


let count = 1;

do {
    let count1 = 1;
    do{
        console.log(`${count} x ${count1} = ${count * count1}`)
        count1++;
    } while(count1 <=10);

    count++;
} while(count <=10);


let array = [[1], 2, [3], 4, 5,]; 
// ) isolar operações
// } definem blocos e objetos
// ] espressar ou declara vetores

console.log(array[0][0]); //Acessando uma posição diretamente
console.log(array [10-8]); //Acessa uma posição por uma conta
*/

// let array = [1, 2, 3, 4, 5];

// array[5] = 10;

// console.log(array);
// array[5] = 152.1;
// console.log(array);

// let matriz = [
//     [1, 2, 3, 4, 5,],
//     [6, 7, 8, 9, 10,],
//     [11, 12, 13, 14, 15,],
// ];

// console.log(matriz[1][3])


for(let count = 1; count <= 10; count++){
    for(let count1=0; count1<=10; count1++){
        let linha = count 
        let coluna = count1
        let array = [
            [linha]
            [coluna]
        ];
        console.log(`${array}`)
    }
}
 

