const placesList = document.querySelector('.places__list');


const deleteCard = (cardElement) => { 
    cardElement.remove();
};


const createCard = (initialCard, deleteCard) => {
const cardTemplate = document.querySelector("#card-template").content; 
const cardElement = cardTemplate.querySelector(".card").cloneNode(true); 
const cardImage = cardElement.querySelector(".card__image");
cardImage.src = initialCard.link;
cardImage.alt = initialCard.name;
cardElement.querySelector(".card__title").textContent = initialCard.name;

const deleteButton = cardElement.querySelector(".card__delete-button");
deleteButton.addEventListener("click", () => deleteCard (cardElement));

return cardElement;
};



initialCards.forEach(function (initialCard) {
    const cardElement = createCard(initialCard, deleteCard);
    placesList.append(cardElement);
    });
