const CategoryForm = () => {
	return (
		<main>
			<h3>Add Style</h3>
			<form action="/styles/add" method="POST">
				<div class="form-item">
					<label th:for="name">Name of Style</label>
					<input th:field="${style.name}" />
				</div>
				<button type="submit">Add Style</button>
			</form>
		</main>
	);
};

export default CategoryForm;
