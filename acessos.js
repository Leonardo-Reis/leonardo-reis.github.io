const storage = localStorage.getItem('id')

if (storage === null) {
    console.log('nunca tinha entrado')

    uuidReq = fetch('https://www.api.leonardo-reis.com/return-id')
    .then(response => {
        return response.json()
    }).then(jsonBody => {
        localStorage.setItem('id', jsonBody.uuid)

        const data = {
            "uuid": jsonBody.uuid
        }
    
        const unicoReq = fetch('https://www.api.leonardo-reis.com/add-acesso-unico', header= {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    })
} else {
    console.log('já tinha entrado')

    const uuid = storage

    const data = {
        "uuid": uuid
    }

    geralReq = fetch('https://www.api.leonardo-reis.com/add-acesso-geral',
    headers= {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    )
}