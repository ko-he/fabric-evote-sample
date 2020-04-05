import axios from 'axios'

class BaseApiService {
  client = axios.create({ baseURL: 'http://localhost:8081' })
}

export default BaseApiService