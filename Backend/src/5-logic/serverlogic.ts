import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import { ValidationErrorModel } from "../4-models/error-models";
import ServerModel from "../4-models/servers-model";
import { UnauthorizedErrorModel } from "../4-models/error-models";
import ServerCompanyModel from "../4-models/serverCompany-model";

async function getAllServersCompanies():Promise<ServerCompanyModel[]>{
    const sql=`SELECT * FROM serverscompany`
    const serverscompanies=await dal.execute(sql)
    return serverscompanies
}


async function getAllservers():Promise<ServerModel[]>{
    const sql=`SELECT S.serverId,S.serverName,S.serverIp,S.status,  CONCAT(DATE_FORMAT(S.creationTime, '%Y-%m-%d'), ' ', TIME_FORMAT(S.creationTime, '%H:%i:%s')) AS creationTime,C.serverCompanyName
    FROM servers AS S JOIN serverscompany AS C
    ON S.serverCompanyId=C.serverCompanyId;`
    const developmentsgroup=await dal.execute(sql)
    return developmentsgroup
}

async function changestatus(server:ServerModel):Promise<ServerModel>{
    // const error=server.validate()
    // if (error) throw new ValidationErrorModel(error)

   const sql=`UPDATE servers
     SET status='${server.status}'
     WHERE serverId=${server.serverId};`
    // const values=[server.status,status,server.status,status,server.status]
    const info:OkPacket=await dal.execute(sql)
    if(info.affectedRows===0) throw new UnauthorizedErrorModel("The update has not been carried out Check that the status has been sent correctly")
 
    return server
}


export default {
    getAllServersCompanies,
    getAllservers,
    changestatus
};
