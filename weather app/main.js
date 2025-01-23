const apikey = "ca8894c7c3f304dbf890c6f6bb10fda7";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchbox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button"); 
// when people will click on the search button it should the city information
// in the checkwheather function
const weatherIcon = document.querySelector(".weather-icon")

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&apiID=${apikey}`);
    var data = await response.json();

    //console.log(data);
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    else if (data.weather[0].main === "Clear"){
        weatherIcon.src = "images/clear.png"
    }
    else if (data.weather[0].main === "Rain"){
        weatherIcon.src = "images/rain.png"
    }
    else if (data.weather[0].main === "drizzle"){
        weatherIcon.src = "images/Drizzle.png"
    }
    else if (data.weather[0].main === "Mist"){
        weatherIcon.src = "images/mist.png"
    }

}

searchBtn.addEventListener('click', () => {
      checkweather(searchbox.value);   // this check wheather will have the city infor written in the input feild
      // so get the data written in the input feild we will add the searchbox.value
      // so this searchbox.value will give the city name written in the input feild and it will pass the city name in the checkweather and 
      // will be added in the api (const = response) and it will give info of the particular city
})