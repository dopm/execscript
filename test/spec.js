
describe('execute-script', function() {
  var exec = require('execute-script');

  function assert(a, b) {
    if (a !== b) {
      throw new Error(a + ' not equal ' + b);
    }
  }

  var node = document.getElementById('count');

  it('should plus count', function() {
    assert(count, 1);
    exec(node);
    assert(count, 2);
  });
});
