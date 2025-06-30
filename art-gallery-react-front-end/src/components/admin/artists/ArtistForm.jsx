import { useState } from 'react';
import InputErrorMessage from '../../common/InputErrorMsg';

let initialArtist = {
	firstName: '',
	lastName: '',
	location: '',
};

let errorMessages = {
	firstName: 'First name is required.',
	lastName: 'Last name is required.',
};

const ArtistForm = () => {
	const [artist, setArtist] = useState(initialArtist);
	const [hasErrors, setHasErrors] = useState(false);

	const handleChange = event => {
		let updatedArtist = {
			...artist,
			[event.target.id]: event.target.value,
		};
		setArtist(updatedArtist);
	};

	const handleSubmit = event => {
		if (artist.firstName === '' || artist.lastName === '') {
			event.preventDefault();
			setHasErrors(true);
		} else {
			console.log('Validation passed and form submitted.');
			// POST to /api/artists/add endpoint
			setHasErrors(false); // TODO: if component is removed this is probably not necessary
		}
	};

	return (
		<main>
			<h3>Add Artist</h3>
			<form action="/artists" method="POST">
				<div className="form-item">
					<label for="firstName">First Name</label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						value={artist.firstName}
						onChange={handleChange}
					/>
					<InputErrorMessage
						hasError={hasErrors && artist.firstName === ''}
						msg={errorMessages[firstName]}
					/>
				</div>
				<div className="form-item">
					<label for="lastName">Last Name</label>
					<input
						type="text"
						id="lastName"
						name="lastName"
						value={artist.lastName}
						onChange={handleChange}
					/>
					<InputErrorMessage
						hasError={hasErrors && artist.firstName === ''}
						msg={errorMessages[lastName]}
					/>
				</div>
				<div className="form-item">
					<label for="location">Location</label>
					<input
						type="text"
						id="location"
						name="location"
						value={artist.location}
						onChange={handleChange}
					/>
				</div>
				<button type="submit" onClick={handleSubmit}>
					Add Artist
				</button>
			</form>
		</main>
	);
};

export default ArtistForm;
