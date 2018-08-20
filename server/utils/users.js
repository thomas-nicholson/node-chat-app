[{

}]


class Users {
  constructor () {
    this.users = [];
  }
  addUser(id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser(id) {
    var removedUser = this.users.filter((user) => user.id === id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser[0];
  }
  getUser(id) {
    var gottenUser = this.users.filter((user) => user.id === id);
    return gottenUser[0];
  }
  getUserList(room) {
    var users = this.users.filter((user) => user.room === room);
    var nameArray = users.map((user) => user.name);
    return nameArray;
  }
}

module.exports = {Users};

/*
class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
  getUserDescription() {
    return `${this.name} is ${this.age} years old`;
  }
}

var me = new Person('Thomas', 22);
var des = me.getUserDescription();
console.log(des);*/
