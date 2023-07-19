

/*const main = document.querySelector('main')
const createTarget = document.getElementById('button')

    // Obtener los valores ingresados por el usuario
    


  const createCard = () => {

    const productName = document.getElementById('productName').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
    const price1 = document.getElementById('price').value;

    const card = document.createElement("div");
  card.classList.add = ("card");

  const imgCard = document.createElement('img')
  imgCard.src = img1
  imgCard.alt = 'Producto'

  const title = document.createElement("h2");
  title.textContent = productName;
 

  const categoryParagraph = document.createElement("p");
  categoryParagraph.textContent = category;


  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.textContent =  description;
  

  const price = document.createElement("p");
  price.classList.add = ('price')
  price.textContent = price1;
  

  // Asignar nodos hijos
  card.appendChild(imgCard)
  card.appendChild(title)
  card.appendChild(categoryParagraph)
  card.appendChild(descriptionParagraph)
  card.appendChild(price)

  main.appendChild(card)

 }
 createTarget.addEventListener('click',createCard)


/*const main = document.querySelector('main')
const createTarget = document.getElementById('img-card')

const img = 'https://images.pexels.com/photos/4109850/pexels-photo-4109850.jpeg?auto=compress&cs=tinysrgb&w=600'

const createCard = () => {

  const card = document.createElement('div')
  card.classList.add('card')

  const imgCard = document.createElement('img')
  imgCard.src = img
  imgCard.alt = 'Producto'

  const titleProduct = document.createElement('h2')
  titleProduct.textContent = 'coffe'

  const category = document.createElement('p')
  category.textContent = 'Bebida'

  const description = document.createElement('p')
  description.textContent = 
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet unde sunt hic mollitia nihil reprehenderit, vero neque sint saepe debitis quibusdam iusto fugiat illum voluptatum quo repellendus veritatis impedit"


  const price = document.createElement('p')
  price.classList.add('price')
  price.textContent = '$7000'

  // Asignar nodos hijos
  card.appendChild(imgCard)
  card.appendChild(titleProduct)
  card.appendChild(category)
  card.appendChild(description)
  card.appendChild(price)

  main.appendChild(card)
}

createTarget.addEventListener('click',createCard)*/

const registerButton = document.querySelector('button');
registerButton.addEventListener('click', () => {
  const main = document.querySelector('main');
  const titleInput = document.getElementById('productName');
  const fileInput = document.getElementById('file');
  const categorySelect = document.getElementById('category');
  const descriptionInput = document.getElementById('description');
  const precioInput = document.getElementById('price');

  // Obtener los valores de los campos de entrada
  const title = titleInput.value;
  const category = categorySelect.value;
  const description = descriptionInput.value;
  const price= precioInput.value;

  // Crear elementos de la tarjeta
  const card = document.createElement('div');
  card.classList.add('card');

  const imgCard = document.createElement('img');
  imgCard.src = fileInput.files[0] ? URL.createObjectURL(fileInput.files[0]) : 'https://images.pexels.com/photos/4109850/pexels-photo-4109850.jpeg?auto=compress&cs=tinysrgb&w=600';
  imgCard.alt = 'card-product';

  const titleProduct = document.createElement('h2');
  titleProduct.textContent = title;

  const categoryElement = document.createElement('p');
  categoryElement.textContent = category;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = description;

  const priceElement = document.createElement('p');
  priceElement.classList.add('price')
  priceElement.textContent = price;
 

  // Asignar nodos hijos
  card.appendChild(imgCard);
  card.appendChild(titleProduct);
  card.appendChild(categoryElement);
  card.appendChild(descriptionElement);
  card.appendChild(priceElement);

  main.appendChild(card);

  // Restablecer los valores de los campos de entrada
  titleInput.value = '';
  fileInput.value = '';
  categorySelect.value = '';
  descriptionInput.value = '';
  precioInput.value=''
});

