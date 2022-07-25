// for of para ler so o valor

// for classico = geralmente com iteraveis (array ou string)
// for in - retorna indice ou chave (string, array ou objeto)
// fot of - retorna o valor em si (iteraveis, arrays ou strings)

const nome = 'Nicolas Brian';
for(let i = 0; i<nome.length; i++){
    console.log(nome[i]);
}

console.log('#######');

//for in
for(let i in nome){
    console.log(nome[i]);
}

console.log('#######');

//for of
for (let valor of nome){
    console.log(valor);
}