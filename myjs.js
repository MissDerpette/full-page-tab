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

    // Send POST request to the API endpoint
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response:', data);
        // Handle the response data as needed
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle any errors that occurred during the request
      });
  });
