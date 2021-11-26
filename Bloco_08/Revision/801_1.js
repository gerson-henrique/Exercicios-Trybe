const enlist = (name) => {
  const mail = name.replace(' ','-').toLowerCase()
  return {fullName: name, email: mail}
 }

const newEmployees = (callback) => {
  const employees = {
   id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> C
   id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
   id3: callback('Carla Paiva')// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};


 

console.log(newEmployees(enlist));