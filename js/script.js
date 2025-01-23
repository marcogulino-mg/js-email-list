//Elementi OUTPUT del DOM
const listEmail = document.getElementById("email-list");

//Elementi INPUT del DOM
const rerollEmail = document.querySelector(".btn");

//Faccio partire la richiesta AJAX verso l'API
const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

//Creo la funzione che andrà a svolgere la chiamata AJAX per richiamare le API Boolean
//e che genererà tot email random quante scelte dall'utente
function genEmail() {
  //Svuoto la lista di Email
  listEmail.innerHTML = "";
  //Scelgo quante email generare
  let numEmail = parseInt(prompt("Scegli quante email vuoi generare."));
  for (let j = 0; j < numEmail; j++) {
    axios
      .get(endpoint)
      .then((responseObj) => {
        //Codice da eseguire in caso di successo
        const randEmail = responseObj.data.response;
        //Contenuto della lista
        listEmail.innerHTML += `<li class="list-group-item">${randEmail}</li>`;
      })
      .catch((error) => {
        //Codice da eseguire in caso di errore
        console.error(error);
      })
      .then(() => {
        //Codice da esegure a prescindere dall'esito
      });
  }
}

//Richiamo la funzione
genEmail();
//L'evento click attiva la funzione
rerollEmail.addEventListener("click", genEmail);