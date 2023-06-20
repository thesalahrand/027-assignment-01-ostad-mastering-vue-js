import 'bootstrap/scss/bootstrap.scss'
import './style.css'
import getWeatherData from './getWeatherData'
import showLoader from './showLoader'
import showErrorMessage from './showErrorMessage'

const locationInp = document.querySelector('.location-inp')
const weatherForm = document.querySelector('.weather-form')
const weatherDetailsWrapper = document.querySelector('.weather-details-wrapper')

weatherForm.addEventListener('submit', async (e) => {
  e.preventDefault()

  const location = locationInp.value

  showLoader(weatherDetailsWrapper)

  try {
    const data = await getWeatherData(location)

    weatherDetailsWrapper.innerHTML = `
      <h6>${data.name}, ${data.sys.country}</h6>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>
      <span>${data.main.temp}&deg;C</span>
      <span>Humidity: ${data.main.humidity}%</span>
      <span>Wind: ${data.wind.speed} km/h</span>
    `
  } catch (err) {
    showErrorMessage(weatherDetailsWrapper, err)
  }
})