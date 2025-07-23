import { useState } from 'react';
import {
	Checkbox,
	InputErrorMessage,
	Select,
	TextInput,
} from '../../common.js';
import TextArea from '../../common/TextArea.jsx';

let initialArtwork = {
	title: '',
	artistId: '',
	categoryIds: [],
};

let initialDetails = {
	description: '',
	yearCreated: '',
	media: '',
	height: 0,
	width: 0,
	depth: 0,
	imageId: '',
};

let errorMessages = {
	titleRequired: 'Title is required.',
	descriptionRequired: 'Description is required.',
	yearCreatedRequired: 'Year Created is required.',
	mediaRequired: 'Media is required.',
	heightRequired: 'Height (inches) is required.',
	widthRequired: 'Width (inches) is required',
	imageIdRequired: 'Image ID is required.',
	artistRequired: 'Artist is required.',
	categoryRequired: 'At least one category must be selected.',
};

const ArtworkForm = ({ artists, categories }) => {
	const [artwork, setArtwork] = useState(initialArtwork);
	const [details, setDetails] = useState(initialDetails);
	const [checkboxes, setCheckboxes] = useState([]);
	const [hasErrors, setHasErrors] = useState(false);

	const isValid = () => {
		return (
			artwork.title &&
			artwork.details.description &&
			artwork.details.yearCreated &&
			artwork.details.media &&
			artwork.details.height &&
			artwork.details.width &&
			artwork.details.imageId &&
			artwork.artistId &&
			artwork.categoryIds.length
		);
	};

	const handleArtworkChange = event => {
		let updatedArtwork = {
			...artwork,
			[event.target.id]: event.target.value,
		};
		setArtwork(updatedArtwork);
	};

	const handleDetailsChange = event => {
		let updatedDetails = {
			...details,
			[event.target.id]: event.target.value,
		};
		setDetails(updatedDetails);
	};

	const handleCategoryChange = event => {
		let updatedCheckboxes = [...checkboxes];
		updatedCheckboxes[event.target.value] = event.target.checked;
		setCheckboxes(updatedCheckboxes);
		// Will update categoryIds array within artwork object at submission
	};

	const handleSubmit = event => {
		event.preventDefault();
		if (!isValid()) {
			setHasErrors(true);
		} else {
			let newArtwork = { ...artwork };
			checkboxes.forEach((checkbox, i) => {
				if (checkbox) newArtwork.categoryIds.push(i);
			});
			// TODO: POST to /api/artworks/add endpoint
			console.log('Validation passed and form submitted.');
            console.log(newArtwork);
			// TODO: route to ArtistsLists
		}
	};

	let artistOptionsJSX = artists.map(artist => {
		return (
			<option id={artist.id} value={artist.id}>
				{artist.getFullName()}
			</option>
		);
	});

	let categoryChoicesJSX = categories.map(category => {
		return (
			<Checkbox
				id={category.id}
				name="categoryIds"
				label={category.title}
				isChecked={checkboxes[category.id] || false}
				handleChange={handleCategoryChange}
			/>
		);
	});

	return (
		<>
			<h3>Add Artwork</h3>
			<form>
				<div className="container">
					<div className="row">
						<div className="form-item col-8">
							<TextInput
								id="title"
								label="Title"
								value={artwork.title}
								handleChange={handleArtworkChange}
							/>
							<InputErrorMessage
								hasError={hasErrors}
								msg={errorMessages[titleRequired]}
							/>
						</div>
						<div className="form-item col-4">
							<Select
								id="artist"
								label="Artist"
								handleChange={handleArtworkChange}>
								<option value="">Select an artist</option>
								{artistOptionsJSX}
							</Select>
							<InputErrorMessage
								hasError={hasErrors}
								msg={errorMessages[artistRequired]}
							/>
						</div>
					</div>
					<div className="row">
						<div className="form-item col-2">
							<TextInput
								id="yearCreated"
								label="Year Created"
								value={artwork.details.yearCreated}
								handleChange={handleDetailsChange}
							/>
							<InputErrorMessage
								hasError={hasErrors && artwork.details.yearCreated === ''}
								msg={errorMessages[yearCreatedRequired]}
							/>
						</div>
						<div className="form-item col-4">
							<TextInput
								id="media"
								label="Media"
								value={artwork.details.media}
								handleChange={handleDetailsChange}
							/>
							<InputErrorMessage
								hasError={hasErrors && artwork.details.media === ''}
								msg={errorMessages[mediaRequired]}
							/>
						</div>
						<div className="form-item col-2">
							<TextInput
								id="height"
								label="Height (in.)"
								value={artwork.details.height}
								handleChange={handleDetailsChange}
							/>
							<InputErrorMessage
								hasError={hasErrors && artwork.details.height === 0}
								msg={errorMessages[heightRequired]}
							/>
						</div>
						<div className="form-item col-2">
							<TextInput
								id="width"
								label="Width (in.)"
								value={artwork.details.width}
								handleChange={handleDetailsChange}
							/>
							<InputErrorMessage
								hasError={hasErrors && artwork.details.width === 0}
								msg={errorMessages[widthRequired]}
							/>
						</div>
						<div className="form-item col-2">
							<TextInput
								id="depth"
								label="Depth (in.)"
								value={artwork.details.depth}
								handleChange={handleDetailsChange}
							/>
						</div>
					</div>
					<div className="row">
						<div className="form-item col">
							<TextArea
								id="description"
								label="Description"
								value={artwork.details.description}
								handleChange={handleDetailsChange}
							/>
							<InputErrorMessage
								hasError={hasErrors && artwork.details.description === ''}
								msg={errorMessages[descriptionRequired]}
							/>
						</div>
						<div className="col">
							<div className="row">
								<div className="form-item col">
									<TextInput
										id="imageId"
										label="Image ID"
										value={artwork.details.imageId}
										handleChange={handleDetailsChange}
									/>
									<InputErrorMessage
										hasError={hasErrors && artwork.details.imageId === ''}
										msg={errorMessages[imageIdRequired]}
									/>
								</div>
							</div>
							<div className="row">
								<h3>Categories</h3>
								<InputErrorMessage
									hasError={hasErrors && artwork.categoryIds.length === 0}
									msg={errorMessages[categoryRequired]}
								/>
								<div className="form-item col">{categoryChoicesJSX}</div>
							</div>
						</div>
					</div>
				</div>

				<button type="submit" onClick={handleSubmit}>
					Add Artwork
				</button>
			</form>
		</>
	);
};

export default ArtworkForm;
