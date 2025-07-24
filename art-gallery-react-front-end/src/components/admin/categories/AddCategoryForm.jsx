import { useState } from 'react';
import TextInput from '../../common/TextInput';
import { useNavigate } from 'react-router';

const AddCategoryForm = () => {
	const [category, setCategory] = useState('');
	const [hasErrors, setHasErrors] = useState(false);

    const navigate = useNavigate();

	const handleChange = event => {
		setCategory(event.target.value);
	};

    const saveNewCategory = async category => {
		try {
			await fetch('http://localhost:8080/api/categories/add', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
				},
				body: JSON.stringify(category),
			});
		} catch (error) {
			console.error(error.message);
		}
	};

	const handleSubmit = event => {
		if (category === '') {
			event.preventDefault();
			setHasErrors(true);
		} else {
			let newCategory = { title: category };
			saveNewCategory(newCategory);
			navigate("/admin/categories");
		}
	};

	return (
		<main>
			<h3>Add Category</h3>
			<form>
				<div className="form-item">
					<label htmlFor="name">Name of Category</label>
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
		</main>
	);
};

export default AddCategoryForm;
