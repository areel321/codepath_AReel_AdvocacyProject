//create dark mode button
let themeButton = document.getElementById("theme-button");
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
  let paragraphs = document.querySelectorAll('p:not(.footer p)');
  let h1_backgrounds = document.querySelectorAll('h1');
  let h3_backgrounds = document.querySelectorAll('h3');
  paragraphs.forEach(paragraph => {
    if (document.body.classList.contains("dark-mode")) {
      paragraph.style.color = "white";
    } else {
      paragraph.style.color = "black";
    }
  });
  h1_backgrounds.forEach(h1_background => {
    if (document.body.classList.contains("dark-mode")) {
      h1_background.style.background = "#78866B";
      h1_background.style.color = "white";
    } else {
      h1_background.style.background = "white";
      h1_background.style.color = "#A9BA9D";
    }
  });
  h3_backgrounds.forEach(h3_background => {
    if (document.body.classList.contains("dark-mode")) {
      h3_background.style.background = "#78866B";
      h3_background.style.color = "white";
    } else {
      h3_background.style.color = "#A9BA9D";
      h3_background.style.background = "white";
    }
  })
};
themeButton.addEventListener("click", toggleDarkMode);

// Add your query for the sign now button here
const signNowButton = document.getElementById('sign-now-button');
const addSignature = (person) => {
    // Write your code to manipulate the DOM here

  
    
  let newParagraph = document.createElement('p');
  newParagraph.textContent = `🖊️ ${person.name} from ${person.town} supports this.`;
  let signaturesDiv = document.querySelector('.signatures');
  signaturesDiv.appendChild(newParagraph);

const counterElement = document.getElementById('counter');
  if (counterElement) {
      counterElement.remove();
  }
count = count+1;
  let newCounter = document.createElement('p');
  newCounter.id = 'counter';
  newCounter.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;

  signaturesDiv.appendChild(newCounter);
  };
  
//petition counter
let count = 3;

// Add a click event listener to the sign now button here
//signNowButton.addEventListener('click', addSignature);

// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form

const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;
  let person = {
    name: petitionInputs[0].value, // accesses and saves value of first input
    town: petitionInputs[1].value,
    email: petitionInputs[2].value
  }
  // TODO: Loop through all inputs
    if (person.name.length < 2){
      containsErrors = true;
petitionInputs[0].classList.add('error');
    } else {
      petitionInputs[0].classList.remove('error');
    }
  if (person.town.length < 2){
    containsErrors = true;
  petitionInputs[1].classList.add('error');
  } else {
    petitionInputs[1].classList.remove('error');
  }
  if (person.email.length < 2){
    containsErrors = true;
  petitionInputs[2].classList.add('error');
  } else {
    petitionInputs[2].classList.remove('error');
  }
  
    if (!person.email.includes('.com')){
      containsErrors = true;
      petitionInputs[2].classList.add('error');
    } else {
      petitionInputs[2].classList.remove('error');
    }
  
  // TODO: Validate the value of each input
  if (containsErrors == false) {
    // TODO: Call addSignature() and clear fields if no errors
    addSignature(person);
    toggleModal(person);
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
    
  }
}
signNowButton.addEventListener('click', validateForm);

//scroll animation
/*revealDistance of 150
initialOpacity of 0
transitionDelay of 0
transitionDuration of '2s'
transitionProperty of 'all'
transitionTimingFunction 'ease'*/

let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease',
}

let revealableContainers = document.querySelectorAll('.revealable');

const reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      /* add the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.add('active');
    } else {
      /* remove the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.remove('active');
    }
  }
}
window.addEventListener('scroll', reveal);

//modal!
const toggleModal = (person) => {
  const modal = document.getElementById("thanks-modal");
  const modalContent = document.getElementById("thanks-modal-content");
  if (modal && modalContent) {
    modal.style.display = "flex";
    modalContent.textContent = `Thank you so much ${person.name}! We will be in touch soon!`;
    let intervalId = setInterval(scaleImage, 500);
    setTimeout(() => {
      clearInterval(intervalId);
      modal.style.display = "none";
    }, 4000);
  }
}


let scaleFactor = 1;
const modalImage = document.getElementById("modalImage")
const scaleImage = () => {
  if (scaleFactor === 1) {
    scaleFactor = 0.8;
  } else {
    scaleFactor = 1;
  }
  if (modalImage){ 
  modalImage.style.transform = `scale(${scaleFactor})`};
}

const closeButton = document.getElementById("close-modal");
const closeModal = () => {
  const modal = document.getElementById("thanks-modal");
  if (modal) {
    modal.style.display = "none";
  }
}
closeButton.addEventListener('click', closeModal);
