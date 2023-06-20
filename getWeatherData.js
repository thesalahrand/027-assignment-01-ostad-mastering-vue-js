const API_KEY = '9a4494121d41039d42e103fa355e98fe'
const BASE_API_URL = 'https://api.openweathermap.org'

const getWeatherData = (location) => {
  const apiUrl = `${BASE_API_URL}/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`

  return new Promise((resolve, reject) => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        data.cod != 200 ? reject(data.message) : resolve(data)
      })
      .catch(err => reject('Something went wrong. Try again later.'))
  })
}

export default getWeatherData