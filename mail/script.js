// creo un array
var email = ["homerj.simpson@gmail.com", "ricksanchez@hotmail.it", "tedmosby@live.it", "johndorian@gmail.com", "thomashelby@hotmail.it", "walterwhite@gmail.com"];

// genero un messaggio di richiesta da parte del browser
var archive = prompt("Please, enter your email.");

// imposto le condizioni in base all'input dell'utente
if (archive == "") {
  document.getElementById("nomail").innerHTML = "You haven't entered your email.";
} else if (archive == (email[0], email[1], email[2], email[3], email[4], email[5])) {
    document.getElementById("got").innerHTML = "Your email's registered in the archive.";
} else {
  document.getElementById("dont").innerHTML = "Your email isn't registered in the archive.";
}
