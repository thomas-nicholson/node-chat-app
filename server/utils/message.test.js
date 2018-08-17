var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'User';
    var lat = -33;
    var lng = 151.5894702;

    var res = generateLocationMessage(from, lat, lng);

    expect(res.createdAt).toBeA('number');
    expect(res.from).toEqual(from);
    expect(res.url).toEqual(`https://www.google.com/maps?q=${lat},${lng}`);
  });
})
