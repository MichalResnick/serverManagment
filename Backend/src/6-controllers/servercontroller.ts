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

router.post("/server/status/:status", async (request: Request, response: Response, next: NextFunction) => {
    //לא עובד.. לא היה לי זמן להמשיך לשבת על זה
    try {
     const status=request.params.status
     const server=new ServerModel(request.body)
     const updetedServer=await serverlogic.changestatus(server,status)
     response.status(201).json(updetedServer)
    }
    catch (err: any) {
        next(err);
    }
});

export default router;