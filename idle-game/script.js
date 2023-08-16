money = 0;
moneyPerClick = 1;
moneyPerSecond = 0;
upgrades1 = [
    {
        name: "Upgrade 1",
        cost: 10,
        value: 1,
        level: 0
    },
    {
        name: "Upgrade 2",
        cost: 100,
        value: 10,
        level: 0
    },
    {
        name: "Upgrade 3",
        cost: 1000,
        value: 100,
        level: 0
    },
    {
        name: "Upgrade 4",
        cost: 10000,
        value: 1000,
        level: 0
    },
    {
        name: "Upgrade 5",
        cost: 100000,
        value: 10000,
        level: 0
    }
];
upgrades2 = [
    {
        name: "Upgrade 6",
        cost: 10,
        value: 1,
        level: 0
    },
    {
        name: "Upgrade 7",
        cost: 100,
        value: 10,
        level: 0
    },
    {
        name: "Upgrade 8",
        cost: 1000,
        value: 100,
        level: 0
    },
    {
        name: "Upgrade 9",
        cost: 10000,
        value: 1000,
        level: 0
    },
    {
        name: "Upgrade 10",
        cost: 100000,
        value: 10000,
        level: 0
    }
];

addEventListener("DOMContentLoaded", function(){
    displayMoney();
    displayUpgrades1();
    displayUpgrades2();
    setInterval(function(){
        money += moneyPerSecond;
        displayMoney();
    }, 1000);
});

function addMoney(){
    money += moneyPerClick;
    displayMoney();
    dispo1();
    dispo2();
}

function displayMoney(){
    document.querySelector(".money-value").innerHTML = money + " $";
}

function buyUpgrade1(n){
    if(money >= upgrades1[n].cost){
        money -= upgrades1[n].cost;
        upgrades1[n].cost = Math.round(upgrades1[n].cost * 1.5);
        moneyPerClick += upgrades1[n].value;
        upgrades1[n].level ++;
        displayMoney();
        displayUpgrades1();

        if (upgrades1[n].level%10 == 0){
            displayNotificaton("levelcap", upgrades1[n].level, upgrades1[n].name);
        }
    }
    else {
        displayNotificaton("nomoney");
    }
}

function displayUpgrades1(){
    document.querySelector(".upgrade-name1").innerHTML = upgrades1[0].name;
    document.querySelector(".upgrade-cost1").innerHTML = upgrades1[0].cost + " $";
    document.querySelector(".upgrade-name2").innerHTML = upgrades1[1].name;
    document.querySelector(".upgrade-cost2").innerHTML = upgrades1[1].cost + " $";
    document.querySelector(".upgrade-name3").innerHTML = upgrades1[2].name;
    document.querySelector(".upgrade-cost3").innerHTML = upgrades1[2].cost + " $";
    document.querySelector(".upgrade-name4").innerHTML = upgrades1[3].name;
    document.querySelector(".upgrade-cost4").innerHTML = upgrades1[3].cost + " $";
    document.querySelector(".upgrade-name5").innerHTML = upgrades1[4].name;
    document.querySelector(".upgrade-cost5").innerHTML = upgrades1[4].cost + " $";

    dispo1();
}

function dispo1(){
    const elements = document.querySelectorAll("#up1");

    for (let i = 0; i < elements.length; i++) {
        if (upgrades1[i].cost > money){
            elements[i].style.backgroundColor = "red";
        }
        else {
            elements[i].style.backgroundColor = "green";
        }
    }
}

function buyUpgrade2(n){
    if(money >= upgrades2[n].cost){
        money -= upgrades2[n].cost;
        upgrades2[n].cost = Math.round(upgrades2[n].cost * 1.5);
        moneyPerSecond += upgrades2[n].value;
        upgrades2[n].level ++;
        displayMoney();
        displayUpgrades2();
    }
    else {
        displayNotificaton("nomoney");
    }
}

function displayUpgrades2(){
    document.querySelector(".upgrade-name6").innerHTML = upgrades2[0].name;
    document.querySelector(".upgrade-cost6").innerHTML = upgrades2[0].cost + " $";
    document.querySelector(".upgrade-name7").innerHTML = upgrades2[1].name;
    document.querySelector(".upgrade-cost7").innerHTML = upgrades2[1].cost + " $";
    document.querySelector(".upgrade-name8").innerHTML = upgrades2[2].name;
    document.querySelector(".upgrade-cost8").innerHTML = upgrades2[2].cost + " $";
    document.querySelector(".upgrade-name9").innerHTML = upgrades2[3].name;
    document.querySelector(".upgrade-cost9").innerHTML = upgrades2[3].cost + " $";
    document.querySelector(".upgrade-name10").innerHTML = upgrades2[4].name;
    document.querySelector(".upgrade-cost10").innerHTML = upgrades2[4].cost + " $";

    dispo2();
}

function dispo2(){
    const elements = document.querySelectorAll("#up2");

    for (let i = 0; i < elements.length; i++) {
        if (upgrades1[i].cost > money){
            elements[i].style.backgroundColor = "red";
        }
        else {
            elements[i].style.backgroundColor = "green";
        }
    }
}

addEventListener("keyup", function(e){
    if (e.key == "1" || e.key == "2" || e.key == "3" || e.key == "4" || e.key == "5"){
        buyUpgrade1(e.key-1);
    }
    else if (e.key == "6" || e.key == "7" || e.key == "8" || e.key == "9"){
        buyUpgrade2(e.key-6);
    }
    else if (e.key == "0"){
        buyUpgrade2(5);
    }
    else {
        addMoney();
        this.document.querySelector(".addMoney").style.backgroundColor = "gold";
        this.setTimeout(function(){
            document.querySelector(".addMoney").style.backgroundColor = "transparent";
        }, 100);
    }
});

function displayNotificaton(msg, lvl, name){
    const elem = document.createElement("div");
    elem.classList.add("notification")

    if (msg == "nomoney"){
        elem.innerHTML = "Vous n'avez pas assez d'argent !";
        elem.style.backgroundColor = "red";
    }
    else if (msg == "levelcap"){
        elem.innerHTML = "Vous avez atteint le niveau "+lvl+" sur "+name+" !";
        elem.style.backgroundColor = "green";
    }

    document.body.appendChild(elem);
    setTimeout(function(){
        elem.remove();
    }, 3500);
}