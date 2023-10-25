const getTodos = (testcallback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            testcallback(undefined, request.responseText);
        } else if(request.readyState === 4) {
            testcallback('could not fetch the data', undefined);
        }
    });
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
}

console.log(1);
console.log(2);

getTodos((err, data) => {

    console.log('Callback fired');
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(3);
console.log(4);