    const pessoa = {
        nome: "leo",
        idade : 25,
        imprimirNome: function (){
            return this.nome + "tem" + this.idade;
        },
        beber: function (){
            return false
        }
    };

    console.log(pessoa.imprimirNome());
