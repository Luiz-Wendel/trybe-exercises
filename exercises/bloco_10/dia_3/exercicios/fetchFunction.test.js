const fetch = require('./fetchFunction');

describe('#fetchFunction', () => {
  it('should resolve with message "request success" #ex.06', async () => {
    const mockedFetch = jest.spyOn(fetch, 'breeds')
      .mockResolvedValue('request success');

    await fetch.breeds();
    expect(mockedFetch).toHaveBeenCalled();
    await expect(fetch.breeds()).resolves.toBe('request success');
    expect(mockedFetch).toHaveBeenCalledTimes(2);
    mockedFetch.mockRestore();
  });

  it('should reject with message "request failed" #ex.06', async () => {
    const mockedFetch = jest.spyOn(fetch, 'breeds')
      .mockRejectedValue('request rejected');

    await expect(fetch.breeds()).rejects.toBe('request rejected');
    expect(mockedFetch).toHaveBeenCalled();
    mockedFetch.mockRestore();
  });
});
