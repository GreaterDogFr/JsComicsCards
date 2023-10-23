let container = document.getElementById("container")

class Card {
    constructor(universe, photo, name, secretId, power, location, team) {
        this.universe = universe
        this.photo = photo
        this.name = name
        this.secretId = secretId
        this.power = power
        this.location = location
        this.team = team
    }
}

let spiderman = new Card("marvel", "asset/img/spidermanPeter.png", "Spider-man", "Peter Parker", "Humain Arachnide", "New York City", "Aucune")
let ultimateSpiderMan = new Card("marvel", "asset/img/milesMorales.png", "Spider-man", "Miles Morales", "Humain arachnide, Bio-électricité, Invisibilité", "New York City", "Les Champions")
let deadpool = new Card("marvel", "asset/img/deadpool.png", "Deadpool", "Wade Wilson", "Mutant, Immortel, Méta", "New York City", "Uncanny Avengers")
let talon = new Card("marvel", "asset/img/x23.png", "X-23, Wolverine", "Laura Kinney", "Mutante, Facteur Régénératif, Griffes", "New York City", "X-Men")
let storm = new Card("marvel", "asset/img/storm.png", "Tornade", "Orore Munroe", "Mutante, Atmokinésie", "Arakko", "Confrérie des Mauvais Mutants")
let scarletWitch = new Card("marvel", "asset/img/scarletWitch.png", "La Sorcière Rouge", "Wanda Maximoff", "Mutante, Sorcellerie,","Krakoa, New York City", "Avengers")

let batman = new Card("DC", "asset/img/batman.png", "Batman", "Bruce Wayne", "Aucun", "Gotham City", "Batman Family")
let batgirl = new Card("DC", "asset/img/batgirl.png", "Batgirl", "Barbara Gordon", "Aucun", "Gotham City", "Birds of Prey")
let flash = new Card("DC", "asset/img/flash.png", "Flash", "Barry Allen", "Meta-Humain, Bolide, Force Véloce", "Central City", "Flash Family")
let huntress = new Card("DC", "asset/img/huntress.png", "Huntress", "Helena Bartinelli", "Aucun", "Gotham City", "Birds Of Prey")
let blackCanary = new Card("DC", "asset/img/blackCanary.png", "Black Canary", "Dinah Drake", "Meta-Humaine, Attaque Sonique", "Seattle(Star City)", "Birds Of Prey")
let greenArrow = new Card("DC", "asset/img/greenArrow.png", "Green Arrow", "Oliver Queen", "Aucun", "Seattle(Star City)", "Team Arrow")

let characters = [spiderman, ultimateSpiderMan, deadpool, talon, storm, scarletWitch,
    batman, batgirl, flash, huntress, blackCanary, greenArrow]

/*
? On affiche les cartes en parcourant le tableau et en affichant les cartes
? a chaque passage
*/

function ShowCards() {
    for (let iteration = 0; iteration < characters.length; iteration++) {
        /*
        ?On crée une nouvelle carte a chaque passage,
        ?On défini une classe commune pour le css, ainsi qu'un ID incrémental 
        ?pour mieux cibler plus tard
        */
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "card")
        newDiv.setAttribute("id", iteration + 1)
        const upperCard = document.createElement("div");
        upperCard.setAttribute("class","upperCard")
        const bottomCard = document.createElement("div")
        bottomCard.setAttribute("class","bottomCard")
        //? On affiche la carte, et ses deux divs enfants
        container.appendChild(newDiv)
        newDiv.appendChild(upperCard)
        newDiv.appendChild(bottomCard)
        /*
        ? On créé ensuite chaque élément 1 par 1, pour construire la carte 
        ? de manière dynamique
        */
        //? Univers
        let cardUniverse = document.createElement("img");
        cardUniverse.setAttribute("src", "asset/img/" + characters[iteration].universe + ".png")
        cardUniverse.setAttribute("class", "universe")
        //? photo
        let cardPhoto = document.createElement("img");
        cardPhoto.setAttribute("src", characters[iteration].photo)
        cardPhoto.setAttribute("class","photo")
        //? Nom
        let cardName = document.createElement("p")
        cardName.setAttribute("class", "Name")
        cardName.innerHTML = "Nom : " + characters[iteration].name
        //? Identité secrête
        let cardSecretId = document.createElement("p")
        cardSecretId.setAttribute("class", "secretId")
        cardSecretId.innerHTML = "Identité Secrète : " + characters[iteration].secretId
        //? Pouvoirs
        let cardPower = document.createElement("p")
        cardPower.setAttribute("class", "power")
        cardPower.innerHTML = "Pouvoir : " + characters[iteration].power
        //? Lieu
        let cardLocation = document.createElement("p")
        cardLocation.setAttribute("class", "lieu")
        cardLocation.innerHTML = "Lieu : " + characters[iteration].location
        //? Equipe
        let cardTeam = document.createElement("p")
        cardTeam.setAttribute("class", "team")
        cardTeam.innerHTML = "Equipe : " + characters[iteration].team
        //? on affiche tout dans l'ordre pour la carte
        upperCard.appendChild(cardUniverse)
        upperCard.appendChild(cardPhoto)
        bottomCard.appendChild(cardName)
        bottomCard.appendChild(cardSecretId)
        bottomCard.appendChild(cardPower)
        bottomCard.appendChild(cardLocation)
        bottomCard.appendChild(cardTeam)
    }
}

ShowCards()