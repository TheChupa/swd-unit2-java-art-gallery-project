import { useState } from 'react';
import TextInput from '../../common/TextInput';

const CategoryForm = () => {
	const [category, setCategory] = useState('');
	const [hasErrors, setHasErrors] = useState(false);

	const handleChange = event => {
		setCategory(event.target.value);
	};

	const handleSubmit = event => {
		if (category === '') {
			event.preventDefault();
			setHasErrors(true);
		} else {
			console.log('Validation passed and form submitted.');
			// TODO: POST to /api/categories/add endpoint
			setHasErrors(false); // TODO: if component is removed this is probably not necessary
		}
	};

	return (
		<main>
			<h3>Add Category</h3>
			<form action="/categories/add" method="POST">
				<div className="form-item">
					<label for="name">Name of Category</label>
					<TextInput
						id="title"
						label="Title"
						value={category}
						handleChange={handleChange}
					/>
					<InputErrorMessage
						hasError={hasErrors && category === ''}
						msg="Category name is required."
					/>
				</div>
				<button type="submit" onSubmit={handleSubmit}>
					Add Category
				</button>
			</form>
		</main>
	);
};

export default CategoryForm;
