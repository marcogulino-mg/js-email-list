const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

//Faccio partire la richiesta AJAX verso l'API
axios
  .get(endpoint)
  .then((responseObj) => {
    //Codice da eseguire in caso di successo
  })
  .catch((error) => {
    //Codice da eseguire in caso di errore
    console.error(error);
  })
  .then(() => {
    //Codice da esegure a prescindere dall'esito
  });
