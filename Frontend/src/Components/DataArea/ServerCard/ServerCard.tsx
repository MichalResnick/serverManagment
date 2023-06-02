import ServerModel from "../../../Models/Server-model";
import "./ServerCard.css";

interface ServerCardProps {
	server:ServerModel
}

function ServerCard(props:ServerCardProps): JSX.Element {
    return (
        <div className="ServerCard">
			<div className="card-content">
             <h3 className="card-title">Name:{props.server.serverName}</h3>
             <p className="card-description">ServerIp:{props.server.serverIp}</p>
             <p className="card-description">Server Company Name:{props.server.serverCompanyName}</p>
             <p className="card-description">status: {props.server.status}</p>
             <p className="card-description">Creation Time: {props.server.creationTime}</p>
           </div>
        </div>
    );
}

export default ServerCard;
