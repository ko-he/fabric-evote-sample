import BaseApiService from "./BaseApiService";

class VotersService extends BaseApiService {
  register = async(
    voterId: string,
    registrarId: string,
    firstName: string,
    lastName: string 
    )  => {
    return this.client.post('registerVoter', {
      voterId,
      registrarId,
      firstName,
      lastName
    })
  }
}

export default VotersService