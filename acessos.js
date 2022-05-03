const storage = localStorage.getItem('id')

if (storage === null) {
    console.log('nunca tinha entrado')

    const uuid = crypto.randomUUID()

    localStorage.setItem('id', uuid)

    const data = {
        "uuid": uuid
    }

    fetch('https://www.api.leonardo-reis.com/add-acesso-unico', header= {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
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
