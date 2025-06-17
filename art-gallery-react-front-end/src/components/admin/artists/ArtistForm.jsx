const ArtistForm = () => {
	return (
		<main>
			<h3>Add Artist</h3>
			<form action="/artists/add" method="POST">
				<div class="form-item">
					<label th:for="firstName">First Name</label>
					<input th:field="${artist.firstName}" />
					<p class="error" th:errors="${artist.firstName}"></p>
				</div>
				<div class="form-item">
					<label th:for="lastName">Last Name</label>
					<input th:field="${artist.lastName}" />
					<p class="error" th:errors="${artist.lastName}"></p>
				</div>
				<div class="form-item">
					<label th:for="location">Location</label>
					<input th:field="${artist.location}" />
				</div>
				<button type="submit">Add Artist</button>
			</form>
		</main>
	);
};

export default ArtistForm;
