// Task 4: delUser(number)
export function delUser(id){
    fetch ("http://localhost:3000/users/5",{
    method: "DELETE"
    });
}
