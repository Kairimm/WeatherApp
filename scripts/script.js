let locatie = 'Wedde';
let apiURLL = `http://api.openweathermap.org/geo/1.0/direct?q=${locatie}&limit=5&appid=`;
let apiKey = 'd3ce7a3d52df04ef8d1a929d734c66df';

window.onload = (() => {
    fetch(`${apiURLL}${apiKey}`)
        .then(response => response.json())
        .then(data => {
            let lon = data[0].lon;
            let lat = data[0].lat;
            let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
            fetch(apiURL)
                .then(response => response.json())
                .then(data => {
                    document.querySelector('.location-name').innerText = data.name;
                    document.querySelector('.temperature').innerText = Math.round(data.main.temp);
                    document.querySelector('.date').innerText = getDate();
                    document.querySelector('.humidity-meter').innerText = '% ' + data.main.humidity;
                    document.querySelector('.feels-like').innerText = Math.round(data.main.feels_like) + '°';
                    document.querySelector('.wind-speed').innerHTML = data.wind.speed + "<p class='text-sm'>kph</p>";
                });
        });
});

function getDate() {
    let date = new Date();
    let hours = date.getHours();
    hours = hours.toString().padStart(2, '0');
    let minutes = date.getMinutes();
    minutes = minutes.toString().padStart(2, '0');

    return `${hours}:${minutes}`;
}


document.querySelector('.text-input').addEventListener('change', (ev) => {
    ev.preventDefault();

    let locatie = document.querySelector('.text-input').value;
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${locatie}&limit=5&appid=`;
    let key = 'd3ce7a3d52df04ef8d1a929d734c66df';

    fetch(`${url}${key}`)
        .then(response => response.json())
        .then(data => {
            let lon = data[0].lon;
            let lat = data[0].lat;
            let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
            fetch(apiURL)
                .then(response => response.json())
                .then(data => {
                    document.querySelector('.location-name').innerText = data.name;
                    document.querySelector('.temperature').innerText = Math.round(data.main.temp);
                    document.querySelector('.date').innerText = getDate();
                    document.querySelector('.humidity-meter').innerText = '% ' + data.main.humidity;
                    document.querySelector('.feels-like').innerText = Math.round(data.main.feels_like) + '°';
                    document.querySelector('.wind-speed').innerHTML = data.wind.speed + "<p class='text-sm'>kph</p>";
                });
        });
})