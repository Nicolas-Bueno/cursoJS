// const h2 = document.querySelector('.container h2');
// const data = new Date();

// function getDiaSemana(diaSemana) {
//     let diaSemanaTexto;

//     switch (diaSemana) {
//         case 0: 
//             diaSemanaTexto = "Domingo";
//         return diaSemanaTexto;    
//         case 1: 
//             diaSemanaTexto = "Segunda-feira";
//         return diaSemanaTexto;    
//         case 2: 
//             diaSemanaTexto = "Terça-feira";
//         return diaSemanaTexto;    
//         case 3: 
//             diaSemanaTexto = "Quarta-feira";
//         return diaSemanaTexto;    
//         case 4: 
//             diaSemanaTexto = "Quinta-feira";
//         return diaSemanaTexto;    
//         case 5: 
//             diaSemanaTexto = "Sexta-feira";
//         return diaSemanaTexto;    
//         case 6: 
//             diaSemanaTexto = "Sabado";
//         return diaSemanaTexto;    
//         default:
//             diaSemanaTexto = "";
//         return diaSemanaTexto;    
//     }
// }
// function getMes(mes) {
//     let mesTexto;

//     switch (mes) {
//         case 0: 
//             mesTexto = "Janeiro";
//         return mesTexto;    
//         case 1: 
//             mesTexto = "Fevereiro";
//         return mesTexto;    
//         case 2: 
//             mesTexto = "março";
//         return mesTexto;    
//         case 3: 
//             mesTexto = "abril";
//         return mesTexto;    
//         case 4: 
//             mesTexto = "maio";
//         return mesTexto;    
//         case 5: 
//             mesTexto = "junho";
//         return mesTexto;    
//         case 6: 
//             mesTexto = "julho";
//         return mesTexto;    
//         case 7: 
//             mesTexto = "agosto";
//         return mesTexto;    
//         case 8: 
//             mesTexto = "setembro";
//         return mesTexto;    
//         case 9: 
//             mesTexto = "outubro";
//         return mesTexto;        
//         case 10: 
//             mesTexto = "Novembro";
//         return mesTexto;    
//         case 11: 
//             mesTexto = "Dezembro";
//         return mesTexto;    
//         default:
//             mesTexto = "";
//         return mesTexto;    
//     }

// }
// function zeroAEsquerda(num){
//     return num >= 10 ? num : `0${num}`;
// }

// function criaData(data) {
//     const diaSemana = data.getDay();
//     const mes = data.getMonth();
//     const nomeDia = getDiaSemana(diaSemana);
//     const nomeMes = getMes(mes);


//     return (`${nomeDia}, ${data.getDate()} de ${nomeMes} ` +
//             `de ${data.getFullYear()} `+ 
//             ` ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
//     );

// }

// h2.innerHTML = criaData(data);
 
const h2 = document.querySelector('.container h2');
const data = new Date();
h2.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});