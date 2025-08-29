
//exercicio 1 taboada.
function tabuada(numero) {// tabuada de um numero
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

tabuada (9);

// exercicio 3 fibonnaci.
function fin(limit) {
    let start = 1;
    let end = 0;]][]
    let sequence = 0;

    console.log(`Os ${limit} primeiros números da sequência de Fibonacci são:`);
    for (let count = 1; count <= limit; count++) {
        console.log(end);
        sequence = start + end;
        end = start;
        start = sequence;
    }
}

fin(5);