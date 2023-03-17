const form = document.querySelector('form');
const resultDiv = document.querySelector('#result');
const body = document.querySelector('body');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = event.target.elements.name.value.toLowerCase();

  switch (name) {
    case 'vergil':
      resultDiv.innerText = 'The Alpha and the Omega, the storm that is approaching.';
      body.style.backgroundImage = 'url(https://www.meme-arsenal.com/memes/7f5900659448f066862909c9340ac096.jpg)';
      body.style.color = 'white';
      resultDiv.style.color = 'white';
      resultDiv.innerHTML += '<br><a href="https://www.youtube.com/watch?v=4l2jca6zFMU" target="_blank" style="color: #b3b3b3; text-decoration: underline;">Vergil Theme</a>';
      break;
    case 'dante':
      resultDiv.innerText = 'Foolish Dante.';
      body.style.backgroundImage = 'url(https://i.pinimg.com/originals/38/be/4f/38be4fe148685677c1b742db056c9e7f.jpg)';
      body.style.color = 'black';
      resultDiv.style.color = 'black';
      resultDiv.innerHTML += '<br><a href="https://www.youtube.com/watch?v=tzH7Y0AQ_UY" target="_blank" style="color: #7f7f7f; text-decoration: underline;">Devil May Cry 3 Battle Theme</a>';
      break;
    case 'nero':
      resultDiv.innerText = 'Deadweight.';
      body.style.backgroundImage = 'url(https://i.kym-cdn.com/entries/icons/original/000/029/387/Nero.jpg)';
      body.style.color = 'white';
      resultDiv.style.color = 'white';
      resultDiv.innerHTML += '<br><a href="https://www.youtube.com/watch?v=KW_o9oOrQn0" target="_blank" style="color: #b3b3b3; text-decoration: underline;">Devil Trigger</a>';
      break;
    case 'v':
      resultDiv.innerText = 'Who tf is this guy?';
      body.style.backgroundImage = 'url(https://culturedvultures.com/wp-content/uploads/2019/03/Devil-May-Cry-5-Screenshot-2019.03.09-23.00.05.100.jpg)';
      body.style.color = 'white';
      resultDiv.style.color = 'white';
      resultDiv.innerHTML += '<br><a href="https://www.youtube.com/watch?v=Hl-XjXU6oQI" target="_blank" style="color: #b3b3b3; text-decoration: underline;">Crimson Cloud</a>';
      break;
    default:
      resultDiv.innerText = '09/11 was not a coincidence, avenge harambe.';
      body.style.backgroundImage = 'url(https://i.pinimg.com/736x/91/54/bf/9154bfbe02de9b7d267956edf6a82348.jpg)';
      body.style.color = 'white';
      resultDiv.style.color = 'white';
      resultDiv.innerHTML += '<br><a href="https://www.youtube.com/watch?v=3E1qWJH8OmM" target="_blank" style="color: #b3b3b3; text-decoration: underline;">You got bamboozed my dude</a>';
      break;
  }
});

