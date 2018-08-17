var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('Should generate correct message object', () => {
    var from = "User";
    var text = "Test message";

    var res = generateMessage(from, text);

    expect(res.createdAt).toBeA('number');
    expect(res.from).toEqual(from);
    expect(res.text).toEqual(text);
  });
});
