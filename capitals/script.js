var score = 0;
var vie = 4;
var clue = false;
var qcmvar = false;

//audios
const audioright = document.createElement("audio");
audioright.src = "assets/audio/valid.mp3";
const audiowrong = document.createElement("audio");
audiowrong.src = "assets/audio/wrong.mp3";
const rickroll = document.createElement("audio");
rickroll.src = "assets/audio/rickroll.mp3";

//fonctions
function jeu(){
    i = Math.floor(Math.random() * pays.length);
    
    afficheDrapeau();

    document.querySelector(".answer").innerHTML = "Quelle est la capitale de " + pays[i] + " ?";
    document.querySelector(".answer").style.backgroundColor = "transparent";
    document.querySelector(".buttoncontainer").style.display = "none";
    document.querySelector(".indice").style.display = "flex";
    document.querySelector(".qcm").style.display = "flex";
    document.querySelector(".qcm").style.display = "flex";
    document.querySelector(".reponse").style.display = "flex";
    document.querySelector(".reponse").style.flexDirection = "column";
    document.querySelector(".reponse").innerHTML = "<input type='text' id='reponse' placeholder='Réponse' autofocus><br><button onclick='checkans()' class='learn-more' id='valid'><span class='circle' aria-hidden='true'><span class='icon arrow'></span></span><span class='button-text'>Valider</span></button>";
    document.getElementById("reponse").focus();
}

function checkans(){
    let capitale = document.getElementById("reponse").value;
    //on veut vérifier si la capitale est bonne, mais sans tenir compte de la casse

    if (capitale == null) {
        document.querySelector(".answer").innerHTML = "Vous avez abandonné !";
        document.querySelector(".indice").style.display = "none";
        document.querySelector(".buttoncontainer").innerHTML = "<button onclick='location.reload()' class='learn-more'><span class='circle' aria-hidden='true'><span class='icon arrow'></span></span><span class='button-text'>Rejouer</span></button>";
        return;
    } else
    if (capitale == capitales[i] || capitale.toLowerCase() == capitales[i].toLowerCase() || capitale.toUpperCase() == capitales[i].toUpperCase() || (capitale == "andorre la vieille" && capitales[i] == "Andorre-la-Vieille")) {
        if (clue == true) {
            score ++;
            clue = false;
        }
        else if (qcmvar == true){
            score += 0.5;
            qcmvar = false;
        }
        else{
            score += 2;
        }
        document.querySelector(".answer").innerHTML = "Bonne réponse !";
        document.querySelector(".answer").style.backgroundColor = "#00ff00";
        audioright.play();
        document.querySelector(".indice").style.display = "none";
        document.querySelector(".qcm").style.display = "none";
        var x = setTimeout(jeu, 1000);
    } else {
        vie--;
        if (vie < 1) {
            document.querySelector(".answer").innerHTML = "Vous avez perdu !";
            document.querySelector(".reponse").innerHTML = "<button onclick='location.reload()' class='learn-more'><span class='circle' aria-hidden='true'><span class='icon arrow'></span></span><span class='button-text'>Rejouer</span></button>";
            document.querySelector(".indice").style.display = "none";
            return;
        }
        document.querySelector(".answer").innerHTML = "La bonne réponse était " + capitales[i];
        document.querySelector(".answer").style.backgroundColor = "#ff0000";
        document.querySelector(".indice").style.display = "none";
        audiowrong.play();
        var x = setTimeout(jeu, 2000);
    }
    //on veut enlever le pays et la capitale de la liste
    pays.splice(i, 1);
    capitales.splice(i, 1);

    document.querySelector(".score").innerHTML = "Score : " + score;
    if (pays.length < 2){
        document.querySelector(".nbPays").innerHTML = "Pays restant : 1";
    }
    else{
        document.querySelector(".nbPays").innerHTML = "Pays restants : " + pays.length;
    }
    afficheVie();

    document.getElementById("drapeau").display = "none";

    if (pays.length < 1) {
        document.querySelector(".answer").innerHTML = "Vous avez Gagné !";
        document.querySelector(".answer").style.backgroundColor = "#FFD700";
        document.querySelector(".reponse").innerHTML = "<button onclick='location.reload()' class='learn-more'><span class='circle' aria-hidden='true'><span class='icon arrow'></span></span><span class='button-text'>Rejouer</span></button>";
        document.body.style.backgroundImage = "url('assets/pictures/rickroll.webp')";
        rickroll.play();
        document.querySelector(".answerspace").style.backgroundColor = "transparent";
        document.getElementById("drapeau").style.display = "none";
        pays.length = 0;
        clearTimeout(x);
        return;
    }

    //On veut remettre le focus sur l'input
    document.querySelector(".reponse").innerHTML = "<input type='text' id='reponse' placeholder='Réponse' autofocus><br><button onclick='checkans()' class='learn-more' id='valid'><span class='circle' aria-hidden='true'><span class='icon arrow'></span></span><span class='button-text'>Valider</span></button>";
    document.getElementById("reponse").focus();
    document.getElementById("reponse").select();
    document.getElementById("reponse").value = "";
}

document.addEventListener("keydown", function (e) {
    if (e.key == "Enter" && pays.length > 0 && vie > 0) {
        checkans();
    }
});

function afficheVie(){
    document.querySelector(".vie").innerHTML = "<img src='assets/pictures/heart-"+vie+".png' alt='vie : "+vie+"' >";
}

function asie(){
    pays = ["Afghanistan", "Arabie Saoudite", "Arménie", "Azerbaïdjan", "Bahreïn", "Bangladesh", "Bhoutan", "Myanmar", "Brunei", "Cambodge", "Chine", "Corée du Nord", "Corée du Sud", "Émirats arabes unis", "Géorgie", "Inde", "Indonésie", "Irak", "Iran", "Israël", "Japon", "Jordanie", "Kazakhstan", "Kirghizistan", "Koweït", "Laos", "Liban", "Malaisie", "Maldives", "Mongolie", "Népal", "Oman", "Ouzbékistan", "Pakistan", "Philippines", "Qatar", "Russie", "Singapour", "Sri Lanka", "Syrie", "Tadjikistan", "Taïwan", "Thaïlande", "Timor oriental", "Turkménistan", "Turquie", "Viêt Nam", "Yémen"];
    capitales = ["Kaboul", "Riyad", "Erevan", "Bakou", "Manama", "Dacca", "Thimphou", "Naypyidaw", "Bandar Seri Begawan", "Phnom Penh", "Pékin", "Pyongyang", "Séoul", "Abou Dabi", "Tbilissi", "New Delhi", "Jakarta", "Bagdad", "Téhéran", "Jérusalem", "Tokyo", "Amman", "Noursoultan", "Bichkek", "Koweït", "Vientiane", "Beyrouth", "Kuala Lumpur", "Malé", "Oulan-Bator", "Katmandou", "Mascate", "Tachkent", "Islamabad", "Manille", "Doha", "Moscou", "Singapour", "Colombo", "Damas", "Douchanbé", "Taipei", "Bangkok", "Dili", "Achgabat", "Ankara", "Hanoï", "Sanaa"];
    firstgame("Asie");
}
function afrique(){
    pays = ["Afrique du Sud", "Algérie", "Angola", "Bénin", "Botswana", "Burkina Faso", "Burundi", "Cameroun", "Cap-Vert", "République centrafricaine", "Comores", "République du Congo", "République démocratique du Congo", "Côte d'Ivoire", "Djibouti", "Égypte", "Érythrée", "Éthiopie", "Gabon", "Gambie", "Ghana", "Guinée", "Guinée-Bissau", "Guinée équatoriale", "Kenya", "Lesotho", "Liberia", "Libye", "Madagascar", "Malawi", "Mali", "Maroc", "Maurice", "Mauritanie", "Mozambique", "Namibie", "Niger", "Nigeria", "Ouganda", "Rwanda", "Sao Tomé-et-Principe", "Sénégal", "Seychelles", "Sierra Leone", "Somalie", "Soudan", "Soudan du Sud", "Swaziland", "Tanzanie", "Tchad", "Togo", "Tunisie", "Zambie", "Zimbabwe"];
    capitales = ["Pretoria", "Alger", "Luanda", "Porto-Novo", "Gaborone", "Ouagadougou", "Bujumbura", "Yaoundé", "Praia", "Bangui", "Moroni", "Brazzaville", "Kinshasa", "Yamoussoukro", "Djibouti", "Le Caire", "Asmara", "Addis-Abeba", "Libreville", "Banjul", "Accra", "Conakry", "Bissau", "Malabo", "Nairobi", "Maseru", "Monrovia", "Tripoli", "Antananarivo", "Lilongwe", "Bamako", "Rabat", "Port-Louis", "Nouakchott", "Maputo", "Windhoek", "Niamey", "Abidjan", "Kampala", "Kigali", "São Tomé", "Dakar", "Victoria", "Freetown", "Mogadiscio", "Khartoum", "Djouba", "Mbabane", "Dodoma", "N'Djaména", "Lomé", "Tunis", "Lusaka", "Harare"];   
    firstgame("Afrique");
}
function amerique(){
    pays = ["Antigua-et-Barbuda", "Argentine", "Bahamas", "Barbade", "Belize", "Bolivie", "Brésil", "Canada", "Chili", "Colombie", "Costa Rica", "Cuba", "République dominicaine", "Dominique", "Équateur", "États-Unis", "Grenade", "Guatemala", "Guyana", "Haïti", "Honduras", "Jamaïque", "Mexique", "Nicaragua", "Panama", "Paraguay", "Pérou", "Saint-Christophe-et-Niévès", "Saint-Vincent-et-les-Grenadines", "Sainte-Lucie", "Salvador", "Suriname", "Trinité-et-Tobago", "Uruguay", "Venezuela"];
    capitales = ["Saint John's", "Buenos Aires", "Nassau", "Bridgetown", "Belmopan", "La Paz", "Brasilia", "Ottawa", "Santiago", "Bogota", "San José", "La Havane", "Saint-Domingue", "Roseau", "Quito", "Washington", "Saint-Georges", "Guatemala", "Georgetown", "Port-au-Prince", "Tegucigalpa", "Kingston", "Mexico", "Managua", "Panama", "Asuncion", "Lima", "Basseterre", "Kingstown", "Castries", "San Salvador", "Paramaribo", "Port-d'Espagne", "Montevideo", "Caracas"];
    firstgame("Amérique");
}
function europe(){
    pays = ["Albanie", "Allemagne", "Andorre", "Arménie", "Autriche", "Azerbaïdjan", "Belgique", "Biélorussie", "Bosnie-Herzégovine", "Bulgarie", "Chypre", "Croatie", "Danemark", "Espagne", "Estonie", "Finlande", "France", "Géorgie", "Grèce", "Hongrie", "Irlande", "Islande", "Italie", "Kosovo", "Lettonie", "Liechtenstein", "Lituanie", "Luxembourg", "Macédoine du Nord", "Malte", "Moldavie", "Monaco", "Monténégro", "Norvège", "Pays-Bas", "Pologne", "Portugal", "République tchèque", "Roumanie", "Royaume-Uni", "Russie", "Saint-Marin", "Serbie", "Slovaquie", "Slovénie", "Suède", "Suisse", "Turquie", "Ukraine", "Vatican"];
    capitales = ["Tirana", "Berlin", "Andorre-la-Vieille", "Erevan", "Vienne", "Bakou", "Bruxelles", "Minsk", "Sarajevo", "Sofia", "Nicosie", "Zagreb", "Copenhague", "Madrid", "Tallinn", "Helsinki", "Paris", "Tbilissi", "Athènes", "Budapest", "Dublin", "Reykjavik", "Rome", "Pristina", "Riga", "Vaduz", "Vilnius", "Luxembourg", "Skopje", "La Valette", "Chisinau", "Monaco", "Podgorica", "Oslo", "Amsterdam", "Varsovie", "Lisbonne", "Prague", "Bucarest", "Londres", "Moscou", "Saint-Marin", "Belgrade", "Bratislava", "Ljubljana", "Stockholm", "Berne", "Ankara", "Kiev", "Vatican"];
    firstgame("Europe");
}
function oceanie(){
    pays = ["Australie", "Fidji", "Kiribati", "Îles Marshall", "Micronésie", "Nauru", "Nouvelle-Zélande", "Palaos", "Papouasie-Nouvelle-Guinée", "Salomon", "Samoa", "Tonga", "Tuvalu", "Vanuatu"];
    capitales = ["Canberra", "Suva", "Tarawa-Sud", "Majuro", "Palikir", "Yaren", "Wellington", "Melekeok", "Port Moresby", "Honiara", "Apia", "Nukuʻalofa", "Funafuti", "Port-Vila"];
    firstgame("Océanie");
}

function firstgame(continent){
    document.querySelector(".buttoncontainer").innerHTML = "";
    document.querySelector(".titre").innerHTML = "Capitales d'" + continent;

    document.getElementById("drapeau").style.display = "block";
    jeu();
}

function indice(){
    clue = true;
    //on veut indiquer la première lettre de la capitale dans le champ de réponse
    var indice = capitales[i].charAt(0);
    document.querySelector(".indice").style.display = "none";
    document.querySelector(".qcm").style.display = "none";
    document.querySelector("#reponse").value = indice;
    document.querySelector("#reponse").focus();
}

function afficheDrapeau(){
    var drapeau = document.querySelector("#drapeau");
    drapeau.src = "assets/flags/" + pays[i].toLowerCase() + ".png";
    drapeau.style.display = "block";
}

function displayRegles(){
    document.querySelector(".regles").style.display = "block";
}

function closeRegles(){
    setTimeout(function(){
        document.querySelector(".regles").style.display = "none";
    }, 100);
}

function qcm(){
    document.querySelector(".indice").style.display = "none";
    document.querySelector(".qcm").style.display = "none";

    document.querySelector(".reponse").style.display = "none";
    document.querySelector(".qcmcontainer").style.display = "flex";

    let j = Math.floor(Math.random() * pays.length);
    let k = Math.floor(Math.random() * pays.length);
    let l = Math.floor(Math.random() * pays.length);

    while(j == i){
        j = Math.floor(Math.random() * pays.length);
    }
    while(k == i || k == j){
        k = Math.floor(Math.random() * pays.length);
    }
    while(l == i || l == j || l == k){
        l = Math.floor(Math.random() * pays.length);
    }

    let choix2 = [pays[i], pays[j], pays[k], pays[l]];
    let choix = [capitales[i], capitales[j], capitales[k], capitales[l]];

    for (let m = 1; m < 5; m++){
        let n = Math.floor(Math.random() * choix.length);
        document.getElementById("choix" + m).innerHTML = choix[n];
        choix.splice(n, 1);
        choix2.splice(n, 1);
    }

    for (let m = 1; m < 5; m++){
        document.getElementById("choix" + m).onclick = function(){
            document.querySelector(".qcmcontainer").style.display = "none";
            document.querySelector(".reponse").style.display = "flex";
            document.querySelector("#reponse").value = document.getElementById("choix" + m).innerHTML;
            document.querySelector("#reponse").focus();
            
            qcmvar = true;
            checkans();
        }
    }
}