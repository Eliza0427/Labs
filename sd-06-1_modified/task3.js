// Type your code below this line!

function Mail(subj, msg) {
    this.subject = subj;
    this.message = msg;
 this.printMail = function(){
  console.log(this.subject+ ": " + this.message); 
 }   
} 
    let subj = process.argv[3];
    let msg = process.argv[4];

  const newMail = new Mail( subj, msg );


  
  // Type your code above this line!
  
  newMail.printMail()