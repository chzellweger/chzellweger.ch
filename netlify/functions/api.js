
// const fetch = require('node-fetch')
import fetch from 'node-fetch'

console.log({fetch})

exports.handler = async (event, context) => {

const API_ENDPOINT = 'https://www.dwds.de/r'
const query = '%40Er+WITH+%24.%3D0+%26%26+%40ist+WITH+%24.%3D1'
const corpus = 'kern'
const dateStart = '1900'
const dateEnd = '1999'
const genre = 'Wissenschaft'
const format = 'full'
const sort = 'random'
const limit = '100'
const view = 'json'

const url = `${API_ENDPOINT}/?q=${query}&corpus=${corpus}&date-start=${dateStart}&date-end=${dateEnd}&genre=${genre}&format=${format}&sort=${sort}&limit=${limit}&view=${view}`

  let response
  try {
    response = await fetch(url).then(res.json()).then(json => console.log(json))
    console.log(response)
    // handle response
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message
      })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: response
    })
  }
}