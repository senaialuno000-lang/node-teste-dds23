// Importação do módulo do node para tratamento de arquivo;
const fs = require("fs");

fs.readFile("teste.txt", "utf8", (erro, dados) => {
    if(erro) {
        console.log(erro);
    } else {
        console.log(dados);
    }
});

// Guarda as informações em uma variável e printa na tela;
console.log(process.argv.slice(2));
const argumentos = process.argv.slice(2);
console.log(argumentos);

// Função de criar arquivo;
fs.writeFile("teste2retorno.txt", argumentos.toString(), "utf8", (erro) => {
    if(erro) {
        console.log("Se vira ai pra consertar");
    } else {
        console.log("Arquivo criado com sucesso");
    }
});