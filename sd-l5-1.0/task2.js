export class FriendNames {
    constructor(name1 , name2, name3) {
      this.name1 = name1;
      this.name2 = name2;
      this.name3 = name3;
    this.printFriend = function(){
  console.log("nombre del amigo: " + this.name1);
  console.log("nombre del amigo: " + this.name2);
  console.log("nombre del amigo: " + this.name3);
    }
  }
}

