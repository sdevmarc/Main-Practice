const getTodos = (testcallback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText)
            testcallback(undefined, );
        } else if(request.readyState === 4) {
            testcallback('could not fetch the data', undefined);
        }
    });
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
}


getTodos((err, data) => {

    console.log('Callback fired');
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
