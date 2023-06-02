import { useEffect, useState } from "react";
import ServerModel from "../../../Models/Server-model";
import "./List.css";
import ServerCompanyModel from "../../../Models/ServerCompany-model";
import dataService from "../../../Services/DataService";

function List(): JSX.Element {


    const [serversCompanies,setServersCompanies]=useState<ServerCompanyModel[]>([])
    const [servers,setServers]=useState<ServerModel[]>([])
    useEffect(()=>{
      dataService.getAllServersCompanies()
      .then(serversCompanies=>setServersCompanies(serversCompanies))
      .catch(err=>alert(err.message))
    
    })
    
    
        return (
            <div className="List">
                <label >Select Server Company:</label>
                <select defaultValue="" >
                    <option disabled value="">select..</option> 
                    {serversCompanies&&serversCompanies.map(s=>
                        <option key={s.serverCompanyId} value={s.serverCompanyId}>{s.serverCompanyName}</option>
                        )}
                </select>            
                <br />
            </div>
        );
    }

export default List;
