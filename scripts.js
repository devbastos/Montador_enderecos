let endereco = {
    rua: 'Esquilo',
    cidade: '108',
    cep: 'Jundiapeba'
};

function exibirEndereco(endereco) {
    for (let chave in endereco)
        console.log(chave, endereco[chave]);
}

exibirEndereco(endereco);


// Gerador de endeço
// function endereco(minhaRua, numeroCasa, cidade) {
//     this.minhaRua = minhaRua,
//         this.numero = numeroCasa,
//         this.cidade = cidade,
//         this.meuEndereco = function() {
//             console.log("o endereço: ");
//         }
// }

// const endereco0 = new endereco('Esquilo', '108', 'jundiapeba')
// const endereco1 = new endereco('Jardelina de Melo', '108', 'suzano')
// console.log(endereco0, endereco1)