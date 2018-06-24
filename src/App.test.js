describe('App Component', () => {

  it('should call API', () => {
    const ask = () => fetch('http://technicalchallenge-env.tmqmrias2g.us-east-1.elasticbeanstalk.com/transaction/0')
    .then(res => res.json());

    const fetchSpy = jest.spyOn(global, 'fetch')
      .mockImplementation( () => Promise.resolve({
        json: () => {},
      }))

    return ask()
      .then( () => {
        expect(fetchSpy).toHaveBeenCalledWith('http://technicalchallenge-env.tmqmrias2g.us-east-1.elasticbeanstalk.com/transaction/0')
      })
  })

});
