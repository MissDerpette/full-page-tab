function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

  const form = document.getElementById('myForm');
  const apiUrl = 'http://206.189.148.20:8080/api/create';

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form input values
    const name = document.getElementById('fname').value;
    const image = document.getElementById('image').value;
    const description = document.getElementById('lname').value;
    const price = document.getElementById('price').value;

    // Create payload object
    const postData = {
      name: name,
      image: image,
      description: description,
      price: price
    };

    output = document.querySelector("#output")
    cardid = document.querySelector("#cardid")
    cardName = document.querySelector("#name")
    cardImage= document.querySelector("#image")

    // Send POST request to the API endpoint

    let apiUrl = 'http://206.189.148.20:8080/api/create'

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
      .then(response => response.json()) //parse
      // data manipulation
      .then(data => {
        console.log('Response:', data);

        // This unpacks the data to variables
        const { _id, created_at, description, image, name, price } = data;
        // 1st way
        // created div inside div#id with the data from the api 
        output.innerHTML = `<div class="new-data"> 
          _id: ${_id}<br>
          created_at: ${created_at}<br>
          description: ${description}<br>
          image: ${image}<br>
          name: ${name}<br>
          price: ${price}<br>
        </div>`;
        
        // 2nd way
        cardid.innerHTML = _id
        cardName.innerHTML = name
        cardImage.innerHTML = image
    
      })

      .catch(error => {
        console.error('Error:', error);
        // Handle any errors that occurred during the request
      });
  });
