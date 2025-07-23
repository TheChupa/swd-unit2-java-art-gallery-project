import { Link } from 'react-router';

const CategoriesList = ({ categories }) => {
	let categoriesJSX = categories.map(category => {
		<tr>
			<td>{category.id}</td>
			<td>{category.title}</td>
			{category.artworks.length ? (
				<td>
					<Link to={'/artworks?categoryId=' + category.id}>
						View {category.artworks.length}
					</Link>
				</td>
			) : (
				<td>None</td>
			)}
		</tr>;
	});

	return (
		<>
			<h2>STYLES</h2>
			{categories.length ? (
				<table className="table table-striped">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Artworks</th>
						</tr>
					</thead>
					<tbody>{categoriesJSX}</tbody>
				</table>
			) : (
				<p>
					<em>No categories to display.</em>
				</p>
			)}
		</>
	);
};

export default CategoriesList;
