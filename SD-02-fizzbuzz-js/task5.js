// Refer to Task 5 in your Instructions to complete this task
let num =Number(prompt("Ingrese un número: "))
for (let i = 1; i<= num; i++) {
  

   if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0)
    console.log(i,"Fizz- Buzz -woof" )

   else if (i % 7 === 0 && i % 5 === 0)
    console.log(i , "woofbuzz")

   else if (i % 7 === 0 && i % 3 === 0)
    console.log(i , "Fizzwoof")

   else if (i % 3 === 0 && i % 5 === 0)
    console.log(i , "FizzBuzz")

   else if(i % 7 === 0) 
    console.log(i, "Woof");
  
   else if (i % 5 === 0) 
    console.log(i , "Buzz"); 

    else if(i % 3 === 0) 
    console.log(i, "Fizz") 

    else
    console.log(i, "     "); 
}
