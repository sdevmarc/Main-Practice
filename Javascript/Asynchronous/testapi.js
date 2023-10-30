const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'cdc3b95291msha7d5d7e6e8c3cd6p1af4a5jsncb29f00a7e29',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

async function test() {
    try {
        const response = await fetch(url,options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

test()