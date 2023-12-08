const fetchPets = async () => {
  const res = await fetch('/api/pets');
  const data = await res.json()
  createCards(data);
}

const createCards = (data) => {  
  const cardBox = document.querySelector('#card-box');
  data.forEach(pet => {
    const card = document.createElement('article');
    const name = document.createElement('h3');
    const imgBox = document.createElement('figure');
    const img = document.createElement('img');
    const friendlyStatement = document.createElement('p');
    const species = document.createElement('p');
    const button = document.createElement("button");

    card.dataset.id = pet.id;
    name.textContent = pet.pet_name;
    img.src = pet.pet_url;
    img.alt = pet.pet_name

    if(pet.is_friendly){
      friendlyStatement.textContent = "Friendly!"
    } else {
      friendlyStatement.textContent = "Not so friendly..."
    }

    species.textContent = `Species: ${pet.pet_species}`;
    button.textContent = "Remove"

    imgBox.append(img);
    card.append(name, imgBox, friendlyStatement, species, button);
    cardBox.append(card);
    document.body.append(cardBox);
  });
}

const postPets = async (name,url,friendly,species) => {
  const res = await fetch('/api/pets',{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pet_name:name, 
      pet_url:url, 
      pet_species:species,
      is_friendly:friendly
    })
  });
  const data = await res.json();
  createCards(data);
}

const getFormData = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const obj = Object.fromEntries(formData);
  const name = obj.petName;
  const url = obj.petURL;
  const friendly = obj.isFriendly ? true : false;
  const animals = document.getElementsByName("animal")
  let species = "";
  animals.forEach(animalOption => {
    if(animalOption.checked){
      species = animalOption.id
    }
  })
  // const species = e.target.dataset.species;
  postPets(name,url,friendly,species);
}

const delPetCard = async (e) => {
  if(e.target.matches("button")){
    const id = e.target.parentElement.dataset.id;
    res = await fetch(`/api/pets/${id}`, {method:"DELETE"});
    e.target.parentElement.remove();
  }
}

const main = () => {
  fetchPets()
  const form = document.querySelector('#pet-form');
  form.addEventListener('submit', getFormData)

  const cardsContainer = document.querySelector("#card-box");
  cardsContainer.addEventListener('click', delPetCard);
}
main()