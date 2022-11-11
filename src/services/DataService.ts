import axios from 'axios'

const API_URl = 'https://swapi.dev/api/'

class DataService {
  getAll(): Promise<any> {
    return axios.get(`${API_URl}/people/`)
  }
}

export default new DataService()
