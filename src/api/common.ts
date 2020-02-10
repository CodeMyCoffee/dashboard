const endpoint = 'http://localhost:3030'

async function postData(url = '', data = {}) {

    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .catch(err => console.log(err))

    return await response;
}

export {
    postData,
    endpoint
}

