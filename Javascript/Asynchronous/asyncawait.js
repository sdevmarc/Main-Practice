// function getData() {
// 	return new Promise(resolve => {
// 		setTimeout(() => {
// 			resolve(46)
// 		}, 1);
// 	})
// }

// async function start() {
// 	const result = await getData()
// 	console.log(result)
// }

// start()

let weather
async function start() {
	const data = await
		fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
	const result = await data.json()
	// console.log(result.properties.periods[1].shortForecast)
	weather = result.properties.periods[1].shortForecast
}


function getWeather() {
	return new Promise((resolve, reject) => {
		resolve(weather)
	})
}

function onSuccess(data) {
	console.log(`Success: ${data}`)
}

function onError(err) {
	console.log(`Error: ${err}`)
}

start()
.then(getWeather)
.then(onSuccess)
.catch(onError)