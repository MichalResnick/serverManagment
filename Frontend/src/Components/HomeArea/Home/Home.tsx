import "./Home.css";
import img from "../../../Assets/pic.jpg"


function Home(): JSX.Element {
    return (
        <div className="Home">
            <h2>Welcome To Our Server Managements</h2>
            <img src={img} />


        </div>
    );
}

export default Home;
