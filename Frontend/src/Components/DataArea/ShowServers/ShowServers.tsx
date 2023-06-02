import { useState, useEffect } from "react";
import ServerModel from "../../../Models/Server-model";
import dataService from "../../../Services/DataService";
import "./ShowServers.css";
import ServerCard from "../ServerCard/ServerCard";

function ShowServers(): JSX.Element {

    const [servers,setServers]=useState<ServerModel[]>([])

    useEffect(()=>{
      dataService.getAllServers()
      .then(servers=>setServers(servers))
      .catch(err=>alert(err.message))
    
    })
    return (
        <div className="ShowServers">
			{servers.map(s=><ServerCard key={s.serverId} server={s}/>)}
        </div>
    );
}

export default ShowServers;
