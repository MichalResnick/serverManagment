import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import { ValidationErrorModel } from "../4-models/error-models";
import ServerModel from "../4-models/servers-model";
import { UnauthorizedErrorModel } from "../4-models/error-models";

async function getAllservers():Promise<ServerModel[]>{
    const sql=`SELECT S.serverId,S.serverName,S.serverIp,S.status,  CONCAT(DATE_FORMAT(S.criationTime, '%Y-%m-%d'), ' ', TIME_FORMAT(S.criationTime, '%H:%i:%s')) AS criationTime,C.serverCompanyName
    FROM servers AS S JOIN serverscompany AS C
    ON S.serverCompanyId=C.serverCompanyId;`
    const developmentsgroup=await dal.execute(sql)
    return developmentsgroup
}

async function changestatus(server:ServerModel,status:string):Promise<ServerModel>{
    const error=server.validate()
    if (error) throw new ValidationErrorModel(error)

   const sql=`UPDATE server
   SET status = CASE 
       WHEN ? = 'online'&& ?='offline' THEN 'offline'
       WHEN ? = 'offline'&& ?='online' THEN 'online'
       ELSE ?
     END;`

    const values=[server.status,status,server.status,status,server.status]
    const info:OkPacket=await dal.execute(sql,values)
    if(info.affectedRows===0) throw new UnauthorizedErrorModel("The update has not been carried out Check that the status has been sent correctly")
 
    return server
}


export default {
    getAllservers,
    changestatus
};