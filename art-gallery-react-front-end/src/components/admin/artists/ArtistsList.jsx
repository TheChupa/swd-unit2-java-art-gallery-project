const ArtistsList = () => {
	return (
		<main>
			<h2>ARTISTS</h2>
			<p th:unless="${artists} and ${artists.size()}">
				<em>No artists to display.</em>
			</p>
			<th:block th:if="${artists} and ${artists.size()}">
				<table class="table table-striped">
					<thead>
						<tr>
							<th>ID</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Location</th>
							<th>Artworks</th>
						</tr>
					</thead>
					<tr th:each="artist : ${artists}">
						<td th:text="${artist.id}"></td>
						<td th:text="${artist.firstName}"></td>
						<td th:text="${artist.lastName}"></td>
						<td th:text="${artist.location}"></td>
						<td th:if="${artist.artworks.size()}">
							<a th:href="${'/artworks?artistId=' + artist.id}">
								View <span th:text="${artist.artworks.size()}"></span>
							</a>
						</td>
						<td th:unless="${artist.artworks.size()}">None</td>
					</tr>
				</table>
			</th:block>
		</main>
	);
};

export default ArtistsList;
