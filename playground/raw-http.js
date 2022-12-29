const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=61522d2de87c5dc173e2b19478551911&query=29.4252,-98.4946&units=f'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
            data = data + chunk.toString()    
            //console.log(data)        
    })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})
request.on('error', (error) => {
        console.log('An error', error)
})
request.end()