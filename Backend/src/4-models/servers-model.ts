import Joi from "joi"

class ServerModel{
    public serverId:number
    public serverName:string
    public serverIp:string
    public serverCompanyId:number
    public status:string
    public creationTime:string

    public constructor(server:ServerModel){
        this.serverId=server.serverId
        this.serverName=server.serverName
        this.serverIp=server.serverIp
        this.serverCompanyId=server.serverCompanyId
        this.status=server.status
        this.creationTime=server.creationTime
    }

    public  static validationSchema=Joi.object({
        serverId:Joi.number().required().positive().optional().integer(),
        serverName:Joi.string().required().min(2).max(40),
        serverIp:Joi.string().required().min(2).max(40),
        serverCompanyId:Joi.number().required().positive().optional().integer(),
        status:Joi.string().required(),
        creationTime:Joi.date().required()

    })

    public validate():string{
      const result=ServerModel.validationSchema.validate(this)
      return result.error?.message
    }
}

export default ServerModel