import { Link } from "react-router";

const PublicHeader = ({setLoggedIn}) => {

    // TODO: use Navlinks and active link here with routing
    const handleLogIn = () => {
        setLoggedIn(true);
    }
    
	return (
		<>
			<header>
				<div id="mag">
					<b>Midtown</b> Art Gallery
				</div>
				<div className="nav">
					<Link className="navlink" to="/artworks">
						Artworks
					</Link>
					<span className="faux-link">Exhibitions</span>
					<span className="faux-link">Contact Us</span>
                    <span className="navlink" onClick={handleLogIn}>Admin Login</span>
				</div>
			</header>
		</>
	);
};

export default PublicHeader;
