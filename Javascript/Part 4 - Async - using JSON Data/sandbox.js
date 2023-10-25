const getTodos = (testcallback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText)
            testcallback(undefined, data);
        } else if(request.readyState === 4) {
            testcallback('could not fetch the data', undefined);
        }
    });
    request.open('GET', 'todos.json');
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
