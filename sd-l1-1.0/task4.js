// Refer to Task 4 in your Instructions to complete this task


for (let i = 0; i < 106; i++) {
  //console.log("TTask Two!", i);

   if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0)
    console.log(i,"Fizz- Buzz -woof" )

   else if (i % 3 === 0 && i % 5 === 0)
    console.log(i , "FizzBuzz")

   if(i % 7 === 0) 
  console.log(i, "Woof");
  
   else if (i % 5 === 0) 

    console.log(i , "Buzz"); 
    if(i % 3 === 0) 
    
  console.log(i, "Fizz") 
  console.log(i, "     "); 
}