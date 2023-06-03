import express, { Request, Response, NextFunction } from "express";
import logic from "../5-logic/serverlogic";
import serverlogic from "../5-logic/serverlogic";
import ServerModel from "../4-models/servers-model";

const router = express.Router(); 

router.get("/serversCompanies", async (request: Request, response: Response, next: NextFunction) => {
    try {
     const serversCompanies=await serverlogic.getAllServersCompanies()
    response.json(serversCompanies)
    }
    catch (err: any) {
        next(err);
    }
});

router.get("/servers", async (request: Request, response: Response, next: NextFunction) => {
    try {
     const servers=await serverlogic.getAllservers()
    response.json(servers)
    }
    catch (err: any) {
        next(err);
    }
});

router.post("/server/status/:serverId", async (request: Request, response: Response, next: NextFunction) => {
    try {
     request.body.meetingId=+request.params.meetingId
     const server=new ServerModel(request.body)
     const updetedServer=await serverlogic.changestatus(server)
     response.status(201).json(updetedServer)
    }
    catch (err: any) {
        next(err);
    }
});

export default router;