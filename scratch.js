const form = document.getElementById('myForm');
const apiUrl = 'http://206.189.148.20:8080/api/create';

const name = document.getElementById('fname').value;
const image = document.getElementById('image').value;
const description = document.getElementById('lname').value;
const price = document.getElementById('price').value;

const postData = {
    name: name,
    image: image,
    description: description,
    price: price,
};

html_output = document.querySelector('#output')

let apiUrl = 'http://206.189.148.20:8080/api/create';

fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(postData) 
})

    .then(response => response.json())

    .then(data => {
        console.log('Response', data);


        const { _id, created_at, description, image, name, price } = data;


        html_output.innetHTML = `<div class="new-data">
        
        <div class="card">
            <div class="image">
                <img src="${image}">
            </div>
            <div class="name">
                product name: ${name}
            </div>
            <div class="description">
                description: ${description}
            </div>
            <div class="price">
                price: ${price}
            </div>
        </div>


        </div>`;
            
    })



