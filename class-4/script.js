// Simulating an API call
function fetchData(url, callback) {
    setTimeout(() => {
        const data = { id: 1, name: 'Example' };
        callback(data);
    }, 1000);
}

fetchData('https://api.example.com', (data) => {
    console.log('Received data:', data);
});