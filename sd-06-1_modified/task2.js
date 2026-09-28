function Mail(subj, msg) {
    this.subject = subj;
    this.message = msg;
  }
  
  // Type your code below this line!
  let subj = process.argv[2];
  let msg = process.argv[3];
  const newMail = new Mail( subj, msg )
  
  // Type your code above this line!
  console.log(newMail)
  console.log(newMail.subject +": " + newMail.message)