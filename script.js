/*
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const students = [
    {
        name: "Vinícius",
        firstTestGrade: 8,
        secondTestGrade: 9,
    },
    {   
        name: "Marcos",
        firstTestGrade: 6,
        secondTestGrade: 4,
    },
    {
        name: "Juliana",
        firstTestGrade: 10,
        secondTestGrade: 9,
    },
    {
        name: "Mateus",
        firstTestGrade: 3,
        secondTestGrade: 5,
    },
    {
        name: "Rosangela",
        firstTestGrade: 8,
        secondTestGrade: 7,
    },
]

let average = function(firstTestGrade, secondTestGrade) {
    return ((firstTestGrade + secondTestGrade) / 2);
}

function printResult(student) {
    if (average(student.firstTestGrade, student.secondTestGrade) >= 7) {
        return `A média do(a) aluno(a) ${student.name} foi de: ${average(student.firstTestGrade, student.secondTestGrade)}. \nParabéns, você foi aprovado(a) no concurso!`
    } else {
        return `A média do(a) aluno(a) ${student.name} foi de: ${average(student.firstTestGrade, student.secondTestGrade)}. \nInfelizmente não foi dessa vez, ${student.name}! Você foi reprovado.`
    };
}

for (let student of students) {
    let averageMessage = printResult(student)
    alert(averageMessage)
}