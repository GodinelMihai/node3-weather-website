const request = require('postman-request')

// const forecast = (latitude, longitude, callback) => {
//     const url= 'http://api.weatherstack.com/current?access_key=799a1f3eb21a8ffd547e3f08767a2c7f&query=' + latitude + ',' + longitude + '&units=m'
//     request({url: url, json: true}, (error, response) => {
//         if (error) {
//             callback('Unable to conect to weather service!', undefined)
//         } else if (response.body.error) {
//             callback('Unable to find location!', undefined)
//         } else {
//             callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' +  response.body.current.feelslike + ' degrees out.')
//         }
//     })
// }

const forecast = (latitude, longitude, callback) => {
    const url= 'http://api.weatherstack.com/current?access_key=799a1f3eb21a8ffd547e3f08767a2c7f&query=' + latitude + ',' + longitude + '&units=m'
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to conect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            //console.log(body.current)
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.' + ' The humidity is ' + body.current.humidity)
        }
    })
}



module.exports = forecast