fetch('http://127.0.0.1:5000/current', {
    method: 'POST',
    body: JSON.stringify({
        email: '@gmail.com', //sample data
        id: '2'//sample data
    }),
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Accept: 'application/json'
    }
})