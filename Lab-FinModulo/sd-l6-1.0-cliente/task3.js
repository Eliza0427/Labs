// Task 3: addUser(first_name, last_name, email)
export function addUser(first_name, last_name, email){
   fetch ("http://localhost:3000/users")
    .then(response => response.json() )
    .then(users => {
        let maxId = 0;
       
       for (let i=0; i<users.length; i++){
            if (users[i].id>maxId){
                maxId=users[i].id;
            }
        }      
    let newId=maxId +1;
    
   const newUser = { 
    id: newId, 
    first_name: first_name,
    laste_name: last_name,
    email: email};
   
    fetch ("http://localhost:3000/users",{
    method: "POST",
    body: JSON.stringify(newUser), 
    headers:{"Content-Type": "application/json"
  }
    });
    });
    
}