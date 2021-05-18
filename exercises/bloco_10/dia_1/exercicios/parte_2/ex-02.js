const techList = (techs, name) => {
  if(!techs.length) return 'Vazio!';

  const sortedTechs = techs.sort();

  return sortedTechs.reduce((list, tech) => [
    ...list,
    {
      tech,
      name,
    }
  ], new Array);
};

module.exports = techList;
