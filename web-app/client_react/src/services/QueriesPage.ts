import BaseApiService from "./BaseApiService";

class QueriesService extends BaseApiService {
  all = async() => {
    const response = await this.client.get('/queryAll')
    return response.data
  }
}

export default QueriesService