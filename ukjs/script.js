//requête http
var req = new XMLHttpRequest();
//ouverture connexion
req.open('GET', 'https://raw.githubusercontent.com/VirisOnGithub/UselessKnowledge/main/infos.txt');
req.send();
//à la fin du chargement
req.addEventListener('load', function() {
    lines = req.responseText.split('\n');
    //on veut savoir le nombre d'infos
    var nbLines = lines.length;
    document.querySelector('.nbLines').innerHTML = "<div class='fin'><div class='container'>La base de données comporte actuellement "+nbLines+" informations inutiles.</div></div>";
    //on choisit une ligne au hasard
    var line = lines[Math.floor(Math.random() * lines.length)];
    //on affiche la ligne dans la page
    document.querySelector('.content').innerHTML = "<div class='container'><div class='info'>"+line+"</div></div>";
    //on veut supprimer l'info dans le tableau
    lines.splice(lines.indexOf(line), 1);

});



function newInfo() {
    if (lines.length == 0) {
        document.querySelector('.content').innerHTML = "<div class='container'><div class='info'>Il n'y a plus d'informations inutiles dans la base de données.</div></div>";
    }
    else {
        var line = lines[Math.floor(Math.random() * lines.length)];
        document.querySelector('.content').innerHTML = "<div class='container'><div class='info'>"+line+"</div></div>"; 
        lines.splice(lines.indexOf(line), 1);
    }
}