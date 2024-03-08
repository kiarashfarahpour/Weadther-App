const apiKey = "c7921449aa3016a5ebab7f90730fa01f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weaterIcon = document.querySelector(".weater-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

        //console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    
        //update image 
        if (data.weather[0].main == "Clouds") {
            weaterIcon.src = "lib/img/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weaterIcon.src = "lib/img/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weaterIcon.src = "lib/img/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weaterIcon.src = "lib/img/drizzel.png";
        }
        else if (data.weather[0].main == "Mist") {
            weaterIcon.src = "lib/img/mist.png";
        }
    
        document.querySelector(".weather").style.display ="block";
    }

    
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value)
})
