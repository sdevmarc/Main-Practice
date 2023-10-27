function fun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('404')
        }, 1000);
    })
}

function fun2() {
    console.log('Function 2')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('🥸')
        }, 1000);
    })
}

function onSuccess(data) {
    console.log(`Success: ${data}`)
}

function onError(err) {
    console.log(`Error: ${err}`)
}

function onFinally() {
    console.log('AIGHT THIS IS FINALLY')
}



function mySuccess() {
    return new Promise((resolve, reject) => {
        resolve('You have requested successfully!')
    })
}

function myError() {
    return new Promise((resolve, reject) => {
        reject('Something went wrong')
    })
}

async function start() {
    try {
        const data = await mySuccess()
        console.log(`Success: ${data}`)
    } catch (error) {
        console.log(`Error: ${error}`)
    }

}

start()






// fun1()
//     .then(fun2)
//     .then(onSuccess)
//     .catch(onError)
//     .finally(onFinally)

