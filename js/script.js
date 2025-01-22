//Elementi OUTPUT del DOM
const listEmail = document.getElementById("email-list");

//Elementi INPUT del DOM
const rerollEmail = document.querySelector(".btn");

//Scelgo quante email generare
let userChoice = parseInt(prompt("Scegli quante email vuoi generare."));

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

rerollEmail.addEventListener("click", () => {
  //Svuoto la lista di Email
  listEmail.innerHTML = "";
  //Scelgo quante email generare
  userChoice = parseInt(prompt("Scegli quante email vuoi generare."));
  for (let j = 0; j < userChoice; j++) {
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
});
