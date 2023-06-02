import { Navigate, Route, Routes } from "react-router-dom";
import List from "../../DataArea/List/List";
import Home from "../../HomeArea/Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Routing.css";
import ServerCard from "../../DataArea/ServerCard/ServerCard";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/home" element={<Home />} /> 
                <Route path="/server-list" element={<List />} />
                <Route path="/server-card" element={<ServerCard />} />
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="*" element={<PageNotFound />} />

            </Routes>
        </div>
    );
}

export default Routing;
