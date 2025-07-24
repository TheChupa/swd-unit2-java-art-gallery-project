import { Link } from "react-router";

const AdminHeader = ({setLoggedIn}) => {

    // TODO: use Navlinks and active link here with routing
    const handleLogOut = () => {
        setLoggedIn(false);
    }
    
	return (
		<>
			<header>
				<div id="mag">
					<b>Midtown</b> Art Gallery
				</div>
				<div className="nav">
					<Link className="navlink" to="/admin/artists">
						Artists
					</Link>
					<Link className="navlink" to="/admin/artworks">
						Artworks
					</Link>
					<Link className="navlink" to="/admin/categories">
						Categories
					</Link>
					<span className="faux-link">Exhibitions</span>
					<span className="faux-link">Contact Us</span>
                    <span className="navlink" onClick={handleLogOut}>Log Out</span>
				</div>
			</header>
		</>
	);
};

export default AdminHeader;