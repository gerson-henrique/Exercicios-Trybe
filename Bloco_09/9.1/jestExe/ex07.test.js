
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};


test(`Letter are in Uppercase ?`,(done) => {
  uppercase('abc', (str) =>  {
    try {
      expect(str).toBe('ABC')
      done();
    } catch (error){
      done(error)
    };
  })});