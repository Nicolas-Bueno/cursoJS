// For in -> ler os indices ou chave do objeto

// const frutas = ['Banana', 'Uva', 'Goiaba', 'Manga'];

// for(let index in frutas){
//     console.log(frutas[index]); // ler os indices
//     console.log(index); // ler posição dos indices 
// }

// Utilizando for in com objeto 

const carro = {
    marca: 'Fiat',
    nome: 'Toro',
    numeroPassageiros: '5'
};

for (let chave in carro){
    console.log(chave); // ler as chaves do objeto
    console.log(carro[chave]);
}