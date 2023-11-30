
import { Link } from "react-router-dom";

export const Title = ()=>(
    <a href="/">
        <img
        className="logo"
        alt="logo"
        src="https://th.bing.com/th/id/OIP.O0UCJaQ8OFOC-bOQgOHIGQHaHa?pid=ImgDet&rs=1"
        />
    </a>
);

const Header = ()=>{
    return(
        <div className="header">
            <Title/>

            {/* <h2 className="mainHead">Foodie App</h2> */}

            <div className="nav-items">
                <ul>
                    <Link to="/">
                    <li className="link">Home</li>
                    </Link>
                    <Link to = "/about">
                    <li className="link">About</li>
                    </Link>
                    <Link to="/contact">
                    <li className="link">Contact</li>
                    </Link>
                    <Link to="/cart">
                    <li className="link">Cart</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
};

 export default Header;