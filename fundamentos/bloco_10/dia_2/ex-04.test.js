const getRepos = require('./ex-04');

describe('Test getRepos function ', () => {
  it('should include todo list and meme generator projects', async () => {
    expect.assertions(2);
    const projects = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(projects).toContain('sd-01-week4-5-project-todo-list');
    expect(projects).toContain('sd-01-week4-5-project-meme-generator');
  });
});
