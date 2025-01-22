//Scelgo quante email generare
let userChoice = parseInt(prompt("Scegli quante email vuoi generare."));
//Elementi OUTPUT del DOM
const listEmail = document.getElementById("email-list");

//Faccio partire la richiesta AJAX verso l'API
const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";
//Mando 10 richieste all'API
for (let i = 0; i < userChoice; i++) {
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