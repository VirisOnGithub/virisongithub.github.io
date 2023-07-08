document.addEventListener('DOMContentLoaded', function() {
    //on veut effectuer une requete http 
    //on va utiliser l'objet XMLHttpRequest
    var req = new XMLHttpRequest();
    //on va ouvrir une connexion
    req.open('GET', 'https://raw.githubusercontent.com/VirisOnGithub/UselessKnowledge/main/infos.txt');
    //on va envoyer la requete
    req.send();
    //on va attendre la reponse
    req.addEventListener('load', function() {
        //on choisit une ligne au hasard dans la reponse
        var lines = req.responseText.split('\n');
        var line = lines[Math.floor(Math.random() * lines.length)];
        //on affiche la ligne dans la page
        document.querySelector('.content').innerHTML = "<div class='container'><div class='info'>"+line+"</div></div>"; 
    });
});