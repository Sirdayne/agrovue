import axios from 'axios'

const AUTH_TOKEN = 'Bearer ' + 'Ynyd6vVU9kWWQauw8oqGA5_oJ2BzrAIWLMoyjM1cJ2bTop3iD-tvE6jinivnjjWy9CuW8cTDn-2ecCjpxxshX2aqFFvBWiFgWDArEU_W8sDNRGL7KnWxjcGi4SfJlcw0wCif0n72UJ0K_fjGwj2ycgL9b4EyahMxnPTAB9INWCFpMZhq7ZVOpJ9O_tDjgLFojQjOlMDVquxydUgn0xVNLPX80zsss8vrsO8dS0sSiwPJDS5tpKXp8rObwtlpSjnrVEBEXOWUpk4enLgfWz9FYT5kWRrI5hMeIPhx7Q2_Kntx2PYgXJGmpF5OjEzuCWgMYl-ltgNBrWQNsgsET_6fZMM7JEhqvU7_Y5wrtQ7BxmDpZ4vtzunAMF2ivcgoIEYTUHBO61wtQhzUMYQFq7Ktzwpb0vml3U3QkZIQ8HqdVFCKnm_kVb0rP4hxRnftNi-Y-hfsldXb27X3muUzhHmpt-RfRyGVIVrYa65EUaoDqXQLVdM7b6tZAWy3JRhzJaaGCzi5v3jBg1PfvlvonMCTRw'

let api = axios.create({
  baseURL: 'http://agroplanapi-test.azurewebsites.net/api/',
  timeout: 180000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
})

api.defaults.headers.common['Authorization'] = AUTH_TOKEN

export default{
  get (path) {
    return api.get(path)
      .then(function (response) {
        console.log(response)
        return response
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
