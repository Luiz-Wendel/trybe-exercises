const fetch = require('./fetchJoke');

const returnObject = {
  'id': '7h3oGtrOfxc',
  'joke': 'Whiteboards ... are remarkable.',
  'status': 200
};

describe('#fetchJoke', () => {
  it('should return the returnObject if param is 7h3oGtrOfxc', async () => {
    const mockedFetch = jest.spyOn(fetch, 'fetchJoke')
      .mockResolvedValue(returnObject);

    const result = await fetch.fetchJoke();
    expect(result.joke).toBe('Whiteboards ... are remarkable.');
    expect(mockedFetch).toHaveBeenCalledTimes(1);
  });
});
