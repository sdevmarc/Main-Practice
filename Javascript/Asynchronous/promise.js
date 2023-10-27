function getWeather() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('cloudy')
        }, 5000);
    })
}

function getWeatherIcon(weather) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if(weather == 'sunny') {
                resolve('🌞')
            } else if(weather == 'cloudy') {
                resolve('☁️')
            } else {
                reject('NO WEATHER')
            }
            
        }, 2000);
    })
}

function onSuccess(data) {
    console.log(`First param ${data}`)
}

function onError(error) {
    console.log(`Error: ${error}`)
}

getWeather()
.then(getWeatherIcon)
.then(onSuccess)
.catch(onError)
