const alunos = ['Guilherme','Lucas','Bruno','Carol'];
const notas = [10,8.5,6,3];
const matricula = [555321,25688,95645,357821];
const listaAlunosNotas = [alunos,notas,matricula];

//console.log(listaAlunosNotas[0][3]);

//console.log(listaAlunosNotas.length);

// console.log(listaAlunosNotas);

// for (let i=0;i<listaAlunosNotas[0].length;i++)
// {
//     let frase = "";
//     for(let j=0;j<listaAlunosNotas.length;j++)
//     {
//         //console.log(`i = ${i} / j = ${j}`);
//         if(j===0)
//         {
//             frase += "O aluno "+listaAlunosNotas[j][i] + " ";
//         }
//         else if (j===1)
//         {
//             frase += "tem nota de "+listaAlunosNotas[j][i] + " ";
//         }
//         else if (j===2)
//         {
//             frase += "e matrícula nº "+listaAlunosNotas[j][i] + ".";
//         }
        
//     }
//     console.log(frase);
// }


let somaNotas = 0;
notas.forEach(nota => somaNotas += nota);

console.log(`Média das notas é ${somaNotas/notas.length}`);


// Using forEach to iterate over the array
// listaAlunosNotas[0].forEach((nome, index) => {
//     const nota = listaAlunosNotas[1][index];
//     const matriculaNumero = listaAlunosNotas[2][index];
  
//     console.log(`Student ${nome} has a grade of ${nota} and registration number ${matriculaNumero}.`);
//   });

