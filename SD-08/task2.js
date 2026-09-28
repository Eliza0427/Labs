export class Player {
    constructor(name,level) {
      this.name=name;
      this.level=level;
      this.printPlayer = function(){
  console.log("nombre del jugador: " + this.name + "level: "+ this.level); 
    }
  }
}
 const newPlayer = new Player(name,level);
newPlayer.printPlayer()
    
