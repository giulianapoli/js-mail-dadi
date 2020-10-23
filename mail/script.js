// creo un array
var archive = ["homerj.simpson@gmail.com", "ricksanchez@hotmail.it", "tedmosby@live.it", "johndorian@gmail.com", "thomashelby@hotmail.it", "walterwhite@gmail.com"];

// genero un messaggio di richiesta da parte del browser
var question = prompt("Please, enter your email.");




var emailTrovata = false

for (var i = 0; i < archive.length; i++) {
  if (question == archive[i]) {
    emailTrovata = true;
  }
}

if (emailTrovata == true) {
  document.getElementById('result').innerHTML = "La tua mail è registrata nei nostri archivi."
} else {
  document.getElementById('result').innerHTML = "La tua mail non è registrata nei nostri archivi."
}
