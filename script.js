const inputBox= document.querySelector('.inputbox');
const searchButton= document.getElementById('searchButton');
const weather_img= document.querySelector('.weather-icon img');
const temperature= document.querySelector('.temperature');
const condition= document.querySelector('.condition');
const location_not_found=document.querySelector('.location-not-found');
const weather_body=document.querySelector('.weather-body')

async function checkWeather(city){
    const api_key="533f24bb095416f8d748743c5282fcd0";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data= await fetch(`${url}`).then(response=>response.json());

    if(weather_data.cod===`404`){
        location_not_found.style.display="flex";
        weather_body.style.display="none";
        return;
    }

    weather_body.style.display="flex";
    temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;
    condition.innerHTML=`${weather_data.weather[0].main}`;
    console.log(weather_data);

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src= "/icons/252035.png";
            break;
        case 'Clear':
            weather_img.src= "/icons/831682.png";
            break;
        case 'Mist':
            weather_img.src= "/icons/mist.jpg";
            break;
        case 'Rain':
            weather_img.src= "icons/cloud-rain-icon-2.png";
            break;
    }   
}

searchButton.addEventListener('click',()=>{
    checkWeather(inputBox.value);
})