// Select text input
const textInput = document.getElementById('city');

let cityName = textInput.value; // store the value of the input 

// When an input event is triggered, update cityName
textInput.addEventListener('input', (e) => {
    cityName = e.target.value;
})

// Select our form
const form = document.querySelector('form');

// When form is submitted, print 'submitted' to the browser console
form.addEventListener('submit', (e) => {
    // prevent form default behavior
    e.preventDefault();
    console.log(cityName); // print input value 

    // Make request to our API
    const url = 'http://localhost:3000/api/v1/weather/?city=';
    axios.get(url + cityName)
        .then((response) => {
            console.log(response.data);

            // select elements
            let city = document.querySelector('.cityName');
            let celsius = document.querySelector('.celsius');
            let fahrenheit = document.querySelector('.fahrenheit');
            let errorMessage = document.querySelector('.errorMessage');

            if (response.data.city) {
                city.innerHTML = 'City: ' + response.data.city;
                celsius.innerHTML = 'Temperature (C): ' + response.data['temperature (C)'];
                fahrenheit.innerHTML = 'Temperature (F): ' + response.data['temperature (F)'];
            } else {
                errorMessage.innerHTML = 'City does not exit in our database';
            }
        })
        .catch((error) => {
            console.log(error);
        })

    // clear input
    textInput.value = '';
})