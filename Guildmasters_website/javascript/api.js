//-------------API MTG CARDS--------------

//root for the api url :) done
//search perameters for the object of a mtg card
//function to call out the targeted perameters for the card
//display card on page

const xhr = new XMLHttpRequest();
const url = "https://api.magicthegathering.io/v1/cards?name=guildmage&type=creature"
// const queryParams = 'guild_mage='
//^help search for guildmages

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        let viewData = xhr.response;
        let maxCards = viewData.cards.length;
        let x = Math.floor(Math.random() * Math.floor(maxCards));
        //^gets random card
        //------ ? is there a way to have it pull info from an api quicker?----- ?
        let randomCard = (viewData.cards[x]);
        // console.log(randomCard);

        document.getElementById('card').src = randomCard.imageUrl;
        return randomCard;
    }
};

xhr.open('GET', url);
xhr.send();

// let finalCard = xhr.response;
// console.log(finalCard);


//let them specificly search



//^The purpose of this conditional statement checks 
//to see if the request has finished.



