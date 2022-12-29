const request = require('request')

const forecast = (latitude,  longitude, callback) => {
        const url = 'http://api.weatherstack.com/current?access_key=61522d2de87c5dc173e2b19478551911&query=' + latitude + ',' + longitude + '&units=f'

        request({ url, json: true }, (error, {body}) => {
                if (error) {
                    console.log(url)
                    callback('Unable to connect to weather service', undefined)                    
                } else if(body.error){
                    callback('Unable to find location service', undefined)
                } else{
                    callback(undefined, body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out')
                }
        })
}

module.exports = forecast