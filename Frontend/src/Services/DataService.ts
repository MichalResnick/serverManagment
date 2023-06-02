import axios from "axios";
import ServerModel from "../Models/Server-model";
import appConfig from "../Utils/Config";
import ServerCompanyModel from "../Models/ServerCompany-model";

class DataService {

    public async getAllServersCompanies():Promise<ServerCompanyModel[]>{
        const response=await axios.get<ServerCompanyModel[]>(appConfig.serversCompaniesUrl)
        const serversCompanies=response.data
        return serversCompanies
     }
  
    public async getAllServers():Promise<ServerModel[]>{
        const response=await axios.get<ServerModel[]>(appConfig.serversUrl)
        const servers=response.data
        return servers
     }

}

const dataService = new DataService();

export default dataService;