const objeto = {
    nome: "Caneta",
    preço: 2.99,

    compra: function calcular(quantidade){
        return quantidade * this.preço;
    }
};

console.log(`Produto: ${objeto.nome} - Preço ${objeto.preço}`);
console.log(`total da venda: ${objeto.compra(5)}`);


// rodar uma função dentro de outra função
console.log (fun1()())// acionei a fun1 e os outros () acionam as outras funções, assim por diate quantas vezes precisar,


console.log(
(fun())()
); // estou executando a primeira função e so depois vai para o segundo ()