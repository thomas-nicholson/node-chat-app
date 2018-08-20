const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  var userss

  beforeEach(() => {
    users = new Users();
    users.users = [
      {
        id: '1',
        name: 'Thom',
        room: 'Node course'
      },
      {
        id: '2',
        name: 'Toby',
        room: 'React course'
      },
      {
        id: '3',
        name: 'Reck',
        room: 'Node course'
      }
    ]
  });

  it('Should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Thomas',
      room: 'The ones'
    };
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('Should remove a user', () => {
    var userId = '2';
    var res = users.removeUser(userId);
    expect(res.id).toEqual(userId);
    expect(users.users.length).toBe(2);
  });

  it('Should not remove a user', () => {
    var res = users.removeUser('5');
    expect(res).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('Should find user', () => {
    var res = users.getUser('1');

    expect(res).toEqual(users.users[0]);
  });

  it('Should not find user', () => {
    var res = users.getUser('6');

    expect(res).toNotExist();
  });

  it('Should return names for node course', () => {
    var userList = users.getUserList('Node course');
    expect(userList).toEqual(['Thom', 'Reck']);
  });

  it('Should return names for node course', () => {
    var userList = users.getUserList('React course');
    expect(userList).toEqual(['Toby']);
  });
});
