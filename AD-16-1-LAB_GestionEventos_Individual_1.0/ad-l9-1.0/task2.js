/*2. Write a JavaScript function to get the values of First and Last name from the form.
By clicking on the button, the names should be printed to the console.*/

function getFormvalue() {

    const firstName = document.querySelector('[name="fname"]').value;
    const lastName = document.querySelector('[name="lname"]').value;

    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);

    return false;
}