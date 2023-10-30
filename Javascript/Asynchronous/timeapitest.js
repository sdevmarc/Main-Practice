

function onSuccess() {
    return new Promise((resolve, reject) => {
        resolve('Success!')
    })
}

function onError() {
    return new Promise((resolve, reject) => {
        reject('There is something wrong with the api')
    })
}

async function myTime() {
    try {
        const data = await fetch("http://worldtimeapi.org/api/timezone/Asia/Manila")
        const result = await data.json()
        console.log(result.timezone)
    } catch (error) {
        console.log(`Error: ${error}`)
    }

}

myTime()