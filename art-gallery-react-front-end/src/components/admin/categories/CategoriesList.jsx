const CategoriesList = () => {
	return (
		<main>
			<h2>STYLES</h2>
			<p th:unless="${styles} and ${styles.size()}">
				<em>No styles to display.</em>
			</p>
			<th:block th:if="${styles} and ${styles.size()}">
				<table className="table table-striped">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Artworks</th>
						</tr>
					</thead>
					<tr th:each="style : ${styles}">
						<td th:text="${style.id}"></td>
						<td th:text="${style.name}"></td>
						<td th:if="${style.artworks.size()}">
							<a th:href="${'/artworks?styleId=' + style.id}">
								View <span th:text="${style.artworks.size()}"></span>
							</a>
						</td>
						<td th:unless="${style.artworks.size()}">None</td>
					</tr>
				</table>
			</th:block>
		</main>
	);
};

export default CategoriesList;
