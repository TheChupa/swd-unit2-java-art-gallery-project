const ArtworkForm = () => {
	return (
		<main>
			<h3>Add Artwork</h3>
			<form action="/artworks/add" method="POST">
				<div className="container">
					<div className="row">
						<div className="form-item col-8">
							<label th:for="title">Title</label>
							<input th:field="${artwork.title}" />
							<p className="error" th:errors="${artwork.title}"></p>
						</div>
						<div className="form-item col-4">
							<label th:for="artist">Artist</label>
							<select th:field="${artwork.artist}">
								<option value="">Select an artist</option>
								<option
									th:each="artist : ${artists}"
									th:value="${artist.id}"
									th:text="${artist.lastName + ', ' + artist.firstName}"></option>
							</select>
							<p className="error" th:errors="${artwork.artist}"></p>
						</div>
					</div>
					<div className="row">
						<div className="form-item col-2">
							<label th:for="yearCreated">Year Created</label>
							<input th:field="${artwork.details.yearCreated}" />
							<p
								className="error"
								th:errors="${artwork.details.yearCreated}"></p>
						</div>
						<div className="form-item col-4">
							<label th:for="media">Media</label>
							<input th:field="${artwork.details.media}" />
						</div>
						<div className="form-item col-2">
							<label th:for="width">Width (in.)</label>
							<input
								type="number"
								step="0.1"
								th:field="${artwork.details.width}"
							/>
						</div>
						<div className="form-item col-2">
							<label th:for="height">Height (in.)</label>
							<input
								type="number"
								step="0.1"
								th:field="${artwork.details.height}"
							/>
						</div>
						<div className="form-item col-2">
							<label th:for="depth">Depth (in.)</label>
							<input
								type="number"
								step="0.1"
								th:field="${artwork.details.depth}"
							/>
						</div>
					</div>
					<div className="row">
						<div className="form-item col">
							<label th:for="description">Description</label>
							<textarea th:field="${artwork.details.description}"></textarea>
						</div>
						<div className="col">
							<div className="row">
								<div className="form-item col">
									<label th:for="imageId">Image ID</label>
									<input th:field="${artwork.details.imageId}" />
									<p
										className="error"
										th:errors="${artwork.details.imageId}"></p>
								</div>
							</div>
							<div className="row">
								<div className="form-item col">
									<th:block th:each="style : ${styles}">
										<label>
											<input
												type="checkbox"
												name="styleIds"
												th:value="${style.id}"
											/>
											<span th:text="${style.name}"></span>
										</label>
									</th:block>
								</div>
							</div>
						</div>
					</div>
				</div>

				<button type="submit">Add Artwork</button>
			</form>
		</main>
	);
};

export default ArtworkForm;
