import fetch from 'node-fetch';

exports.handler = async (event, context) => {

const API_ENDPOINT = 'https://www.dwds.de/r'
const query = '%40Er+WITH+%24.%3D0+%26%26+%40ist+WITH+%24.%3D1'
const corpus = 'kern'
const dateStart = '1900'
const dateEnd = '1999'
const genre = ['Belletristik', 'Wissenschaft', 'Gebrauchsliteratur', 'Zeitung'][0]
const format = 'full'
const sort = 'random'
const limit = '500'

const view = 'json'
const fetchResolver = 'json'

const url = `${API_ENDPOINT}/?q=${query}&corpus=${corpus}&date-start=${dateStart}&date-end=${dateEnd}&genre=${genre}&format=${format}&sort=${sort}&limit=${limit}&view=${view}`
const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'

let response

  try {
    const options = {headers: { 'user-agent': userAgent}}

    response = await fetch(url, options).then(res => res[fetchResolver]())

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