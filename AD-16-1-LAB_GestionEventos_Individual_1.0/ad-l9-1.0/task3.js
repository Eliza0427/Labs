/*3. Write a function to show an alert with information about links.
Clicking on the button should display the number of links on the page, 
the first link in the page, and the last link in the page.*/


function mostrarInfoLinks() {
    const links = document.querySelectorAll("a");

    const total = links.length;
    const primerLink = links[0].href;
    const ultimoLink = links[total - 1].href;

    alert(
        `Número de enlaces: ${total}
Primer enlace: ${primerLink}
Último enlace: ${ultimoLink}`
    );
}