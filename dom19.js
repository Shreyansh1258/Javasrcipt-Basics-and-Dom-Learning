document.querySelector("#btn").addEventListener("click", function () {
  fetch("https://api.open-meteo.com/v1/forecast?latitude=28.6&longitude=77.2&current_weather=true")
    .then(res => res.json())
    .then(data => {
      let temp = data.current_weather.temperature;
      document.querySelector("#temp").innerText = temp + "°C";
    });
});
