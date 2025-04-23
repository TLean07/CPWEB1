const readline = require('readline');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});

rl.question('Digite um número: ', (input) => {
    const numero = parseFloat(input);

    if(isNaN(numero)){
        console.log ('Isso não é um número válido.')
    } else if (numero === 0){
        console.log ("Seu número é zero.")
    } else if (numero > 0){
        console.log ("Seu número é positivo.")
    } else{
        console.log ("Seu número é negativo.")
    }

rl.close()
});
