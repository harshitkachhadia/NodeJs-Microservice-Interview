import axios from 'axios'
class Communicator {
    public userServiceClient;
    public companyServiceClient;
    constructor(){
        this.userServiceClient = axios.create({ baseURL: 'http://localhost:3001' })
        this.companyServiceClient = axios.create({ baseURL: 'http://localhost:3002' })
    }
    async getUserById(id:any){
        const response = await this.userServiceClient.get(`/users/${id}`);
        return response.data;
    }
    async getCompanyById(companyId:any){
        const response = await this.companyServiceClient.get(`/companies/${companyId}`);
        return response.data;
    }
}
 export default new Communicator(); 