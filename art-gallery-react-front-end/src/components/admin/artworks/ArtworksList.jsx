import { Link } from 'react-router';

const ArtworksList = ({ artworks }) => {
	let artworksJSX = artworks.map(artwork => {
		return (
			<tr key={artwork.id}>
				<td>{artwork.id}</td>
				<td>
					<Link to={'/artworks/details/' + artwork.id}>{artwork.title}</Link>
				</td>
				<td>{artwork.artist}</td>
				<td>{artwork.details.yearCreated}</td>
				<td>
					<Link to={'/artworks/details/' + artwork.id}>
						<img src={artwork.details.getImageURL()} width="50px" />
					</Link>
				</td>
			</tr>
		);
	});
	return (
		<>
			<h2>
				ARTWORKS
				{/* <th:block th:if="${artist}">
					{' '}
					BY <span th:text="${artist}"></span>
				</th:block>
				<th:block th:if="${styleName}">
					{' '}
					- <span th:text="${styleName}"></span>
				</th:block> */}
			</h2>
			{artworks.length ? (
				<table className="table table-striped">
					<thead>
						<tr>
							<th>ID</th>
							<th>Title</th>
							<th>Artist</th>
							<th>Year Created</th>
							<th>Image</th>
						</tr>
					</thead>
					{artworksJSX}
				</table>
			) : (
				<p>
					<em>No artworks to display.</em>
				</p>
			)}
		</>
	);
};

export default ArtworksList;
