const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

 test('add user to Usercontroller', () =>{
    let user = new User(2704, "carlos" , "Quinto@generation.org");
    userController.addUser(user);
    expect(userController.getUsers()).not.toContain(user);
  }); 
C
test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

