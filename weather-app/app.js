const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

//Weather Info:::
// const url = 'http://api.weatherstack.com/current?access_key=61522d2de87c5dc173e2b19478551911&query=29.4252,-98.4946&units=f'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//             console.log('Unable to connect to weather service')
//     }
//     else if(response.body.error){
//             console.log('Unable to find location')
//     }   
//     else {
//         console.log(response.body.current.weather_descriptions + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out')
//     }       
// })

const address = process.argv[2]

if(!address)
{
    console.log('Please provide an address')
} else
{    
    geocode(address, (error, {latitude, longitude, location}) => {
            if(error){
                return console.log(error)
            }

            forecast(latitude, longitude, (error, forecastData) => {
                    if(error){
                        return console.log(error)
                    }
                    console.log(location)
                    console.log(forecastData)
            })
        })
}




