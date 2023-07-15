var score = 0;
var vie = 3;

var pays = ["France", "Allemagne", "Italie", "Espagne", "Portugal", "Belgique", "Angleterre", "Suisse", "Autriche", "Pays-Bas (économique)", "Pays-Bas (administrative))"];
var capitales = ["Paris", "Berlin", "Rome", "Madrid", "Lisbonne", "Bruxelles", "Londres", "Berne", "Vienne", "Amsterdam", "La Haye"];

function jeu(){
    while (vie > 0){
        var i = Math.floor(Math.random() * pays.length);
        var capitale = prompt("Quelle est la capitale de " + pays[i] + " ?");

        if (capitale == capitales[i]) {
            score++;
        } else {
            vie--;
            document.querySelector(".answer").innerHTML = "La bonne réponse était " + capitales[i];
        }
        document.querySelector(".score").innerHTML = "Score : " + score;
    }
    document.querySelector(".buttoncontainer").innerHTML = "<button onclick='location.reload()'>Rejouer</button>";
}