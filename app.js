let btnGet = document.querySelector(".update");
let btnUpdate = document.querySelector(".fas");
function getData() {
  btnUpdate.classList.toggle("transform");
  let inputVal = document.querySelector(".input-field").value;

  let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + inputVal + '&units=metric&APPID=5d066958a60d315387d9492393935c19';

  fetch(apiUrl)
    .then(data => data.json())
    .then(user => {
      let tempValue = user.main.temp;
      let pressureValue = user.main.pressure;
      let descriptionValue = user.weather[0].description;
      let humidityValue = user.main.humidity;
      let speedValue = user.wind.speed;
      let degValue = user.wind.deg;
      let feelValue = user.main.feels_like;
      let iconUrl = "http://openweathermap.org/img/w/" + `${user.weather[0].icon}` + ".png"
      icon.setAttribute("src", iconUrl);

      document.getElementById('temp').innerHTML = `${tempValue}`;
      document.getElementById('pressure').innerHTML = `${pressureValue}`;
      document.getElementById('description').innerHTML = `${descriptionValue}`;
      document.getElementById('humidity').innerHTML = `${humidityValue}`;
      document.getElementById('speed').innerHTML = `${speedValue}`;
      document.getElementById('deg').innerHTML = `${degValue}`;
      document.getElementById('icon').innerHTML = `${iconUrl}`;
      document.getElementById('feel').innerHTML = `${feelValue}`;
    })
}
function time() {
  let currentDate = new Date();
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let weekDay = days[currentDate.getDay()];
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();
  let hour = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let second = currentDate.getSeconds();


  document.getElementById('day').innerHTML = `${day} / `;
  document.getElementById('month').innerHTML = `${month} / `;
  document.getElementById('year').innerHTML = `${year}`;
  document.getElementById('hour').innerHTML = `${hour} h : `;
  document.getElementById('minutes').innerHTML = `${minutes} m : `;
  document.getElementById('second').innerHTML = `${second} s`;
  document.getElementById('weekDay').innerHTML = `   ${weekDay}`;
}


btnGet.addEventListener("click", getData);
btnUpdate.addEventListener("click", getData);
setInterval(time, 1000);
