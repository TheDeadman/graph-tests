export const handleServiceWorkerMessage = async (event: ExtendableMessageEvent) => {
    if (event.data) {
        if (event.data.type === 'SKIP_WAITING') {
        } else if (event.data.type === 'SEND_REQUEST') {
            console.log("SENDING REQUEST")
            try {
                // const data = await fetch('http://localhost:3001/api/data', { body: { data: 'Test' }, method: "POST" })
                const data = await fetch('http://localhost:3001/api/data', {
                    body: JSON.stringify(event.data), headers: {
                        'Content-Type': 'application/json',
                    },
                    method: "POST"
                })
                console.log(data)
            } catch (ex) {
                console.log("ERROR fISHING", ex)
            }
        }
    }
    console.log("Messaged")
}

