let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (index in names) {
  console.log(`Olá ${names[index]}`);
}

let carro = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020,
};

for (const key in carro) {
  console.log(
    `${key}: ${carro[key]}`
  );
}
