let apiKey = 'your api key here'; // openweathermap.org go and register

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getWeatherByCoords);
    } else {
        alert('Your browser doesn't supports the feature I need :(')
    }
}

const getWeatherByCoords = async (position) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let uri = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    let res = await fetch(uri)
    let data = await res.json()
    
    drawFunction()

    city.innerText = data.name;
    iconTxt.innerText = data.weather[0].description;
    wIcon.setAttribute('alt', data.weather[0].description)
    wIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    temp.innerText = data.main.temp.toFixed(0) + '°'
}

const drawFunction = () => {
    //select body
    let body = document.querySelector('body')
    //create wrapper an append to body
    let wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    body.appendChild(wrapper)
    // create city h1 element and append to wrapper
    let cityEl = document.createElement('h1')
    cityEl.setAttribute('id', 'city')
    wrapper.appendChild(cityEl)
    //create info div element and append to wrapper
    let infoEl = document.createElement('div');
    infoEl.classList.add('info')
    wrapper.appendChild(infoEl)
    //create iconInfo div element and append to info
    let iconInfoEl = document.createElement('div');
    iconInfoEl.classList.add('iconInfo')
    infoEl.appendChild(iconInfoEl)
    //create icon img element and append to icon Info
    let icnImg = document.createElement('img')
    icnImg.setAttribute('id', 'wIcon')
    icnImg.setAttribute('src', '')
    iconInfoEl.appendChild(icnImg)
    //create icon h3 element and append to icon Info
    let icnTxt = document.createElement('h3')
    icnTxt.setAttribute('id', 'iconTxt')
    icnTxt.classList.add('centered')
    iconInfoEl.appendChild(icnTxt)
    //create temp span element and append to info
    let tempEl = document.createElement('span');
    tempEl.setAttribute('id', 'temp')
    infoEl.appendChild(tempEl)

    //select our created elements

    let city = document.getElementById('city');
    let wIcon = document.getElementById('wIcon');
    let temp = document.getElementById('temp');
    let iconTxt = document.getElementById('iconTxt')
}