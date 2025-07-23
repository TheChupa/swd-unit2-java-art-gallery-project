import { useState } from 'react';
import TextInput from '../../common/TextInput';

const AddCategoryForm = () => {
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
			let newCategory = { title: category };
			// TODO: POST to /api/categories/add endpoint
			console.log('Validation passed and form submitted.');
			console.log(newCategory);
			// Toggle back to categories list
		}
	};

	return (
		<>
			<h3>Add Category</h3>
			<form>
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
				<button type="submit" onClick={handleSubmit}>
					Add Category
				</button>
			</form>
		</>
	);
};

export default AddCategoryForm;
