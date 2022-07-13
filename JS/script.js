const input = document.querySelector('.input');
// инпут
const button = document.querySelector('.button');
// кнопка поиска
const inform = document.querySelector('.inform');
// div для новостей
const form = document.querySelector('form');
// форма поиск и кнопка


button.addEventListener('click', (event)=>{
  event.preventDefault();  // блокировка перезагрузки страницы
  let request = input.value; // введеный поиск в инпут
  input.value = '';  // обнуляю текст поиска после запроса
  // console.log(request);
  
  const url = 'https://content.guardianapis.com/search'; // путь запроса
  const apiKey = '3ae4a796-1d49-4d04-8974-e3962e2fb188';

  fetch(`https://content.guardianapis.com/search?q=${request}&api-key=3ae4a796-1d49-4d04-8974-e3962e2fb188`)
  .then((response) =>response.json()) 
  // обработка promise методом json
  .then((data) => {
    console.log(data)
    // response с массив объектов в results
   // прохидимся циклом по полученному результату
    data.response.results.forEach(item =>{
      let newElement = document.createElement('ul');
      newElement.innerHTML = `<li><a target="_blank" href="${item.webUrl}">${item.webTitle}</a></li>`;
      // создаем новую лишку, внутри ссылка на ресурс и текст
      inform.appendChild(newElement);
    });
  })
  .catch(error=>console.error('Error', error));
  });

sssAAA