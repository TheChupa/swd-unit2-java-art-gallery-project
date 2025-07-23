import { Link } from 'react-router';

const ArtistsList = ({ artists }) => {
	let artistRowsJSX = artists.map(artist => {
		return (
			<tr key={artist.id}>
				<td>{artist.id}</td>
				<td>{artist.firstName}</td>
				<td>{artist.lastName}</td>
				<td>{artist.location}</td>
				{artist.artworks.length ? (
					<td>
						<Link to={'/artworks/' + artist.id}>
							View <span>{artist.artworks.length}</span>
						</Link>
					</td>
				) : (
					<td>None</td>
				)}
			</tr>
		);
	});

	return (
		<>
			<h2>ARTISTS</h2>
			{artists.length ? (
				<table className="table table-striped">
					<thead>
						<tr>
							<th>ID</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Location</th>
							<th>Artworks</th>
						</tr>
					</thead>
					<tbody>{artistRowsJSX}</tbody>
				</table>
			) : (
				<p>
					<em>No artists to display.</em>
				</p>
			)}
		</>
	);
};

export default ArtistsList;
