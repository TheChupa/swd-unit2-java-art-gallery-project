const ArtistsList = ({ artists }) => {
	let artistRowsJSX = artists.map(artist => {
		return (
			<tr>
				<td>{artist.id}</td>
				<td>{artist.firstName}</td>
				<td>{artist.lastName}</td>
				<td>{artist.location}</td>
				{artist.artworks.length ? (
					<td>
						{/* This is meant to be a filtered table so maybe query param */}
						<a href={'/artworks/' + artist.id}>
							View <span>{artist.artworks.length}</span>
						</a>
					</td>
				) : (
					<td>None</td>
				)}
			</tr>
		);
	});

	// TODO: See if <main> is already in place or if this will be the norm for all major components
	return (
		<main>
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
				<p th:unless="${artists} and ${artists.size()}">
					<em>No artists to display.</em>
				</p>
			)}
		</main>
	);
};

export default ArtistsList;
