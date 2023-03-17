function weatherSearch(){
    cityname=pname.value
    console.log(cityname);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=5b4bee0ba241d092159faf007e166080`)
    .then(res=>res.json())
    .then(data=>displayWeather(data))
     
    .catch(err=>{
        alert("there is an for fetching data")
       
    })
   
}

function displayWeather(placedetails){

    place_name=placedetails.name
   temprature=placedetails.main.temp
   temp=Math.round(temprature -273.15)
   humidity=placedetails.main.humidity
   windspeed=placedetails.wind.speed
   sky=placedetails.weather[0].main
   maxtemp=placedetails.main.temp_max
   mxtemp=Math.round(maxtemp -273.15)
   windspeed=placedetails.wind.speed
   feelslike=placedetails.main.feels_like
   flslk=Math.round(feelslike -273.15)
   visibility=placedetails.visibility
    pressure=placedetails.main.pressure
    htmldata=`<div class="output">

<h4 class="list-group-item mt-5 fs-1 text-white"   "> <img  style="  width: 100px;" src="./images/cloud-removebg-preview.png" alt=""> ${place_name}<span> ${temp}°C  </span></h4>
<h4 class="list-group-item fs-3 text-white ">${sky}</h4>

<h4 class="list-group-item m-5 fs-4 col-sm-3 col-lg-6 col-md-4">   &nbsp;<i class=" fa-solid fa-temperature-high"></i>  &nbsp;Humidity       ${humidity}%</h4>
<h4 class="list-group-itemm-5 fs-4 col-sm-3 col-lg-6 col-md-4">°<i class="fa-sharp fa-solid fa-c"></i>   &nbsp;  Feels Like   ${flslk}°C</h4>
<h4 class="list-group-item m-5 fs-4 col-sm-3 col-lg-6 col-md-4">&nbsp <i class="fa-regular fa-eye fs-5"></i>  &nbsp; Visibility&nbsp  ${visibility}</h4>
<h4 class="list-group-item m-5 fs-4 col-sm-3 col-lg-6 col-md-4">&nbsp;&nbsp;<i class="fa-solid  fa-wind fs-5"></i> &nbsp  &nbsp;Wind    ${windspeed}kmph</h4>
<h4 class="list-group-item m-5 fs-4 col-sm-3 col-lg-6 col-md-4">&nbsp;&nbsp;<i class="fa-solid fa-arrows-up-to-line"></i>  &nbsp;Pressure    ${pressure}mb</h4>

</ul>

</div>`
    wdetails.innerHTML=htmldata
}

