const skills = ['HTML', 'CSS', 'JS', 'React', 'Node'];

const firsFunction = (string) => 'Tryber x aqui!'.replace(/x/g, string);

const secondFunction = () => {
  let result = `${firsFunction('Luiz')} Minhas cinco principais habilidades são:`;
  skills.forEach((skill) => result += `\n${skill}`);
  return result;
}

console.log(secondFunction());
