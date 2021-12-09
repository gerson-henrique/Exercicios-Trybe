const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const allLessons = {}

const remodelate = (o1, o2, o3, o4 ) => {
     Object.assign(o1.lesson1,o2)
     Object.assign(o1.lesson2,o3)
     Object.assign(o1.lesson3,o4)

}

const mudancaDeTurno = (aula, turno, horario) =>  aula.turno = horario

const mostraChaves =  (lissao) =>  Object.keys(lissao)

const mostraTamanho =  (lissao) =>  lissao.length

const mostraValores =  (lissao) =>  Object.values(lissao)

remodelate(allLessons,lesson1,lesson2,lesson3)

console.log(allLessons)
