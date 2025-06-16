import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import {
	Artworks,
	ErrorPage,
	Details,
	Header,
	Loading,
} from './components/public/exports';
import { Artist, Artwork, ArtworkDetails, Style } from './classes/exports';
import { isEmpty } from './common/utils';
import './App.css';

function App() {
	const [loading, setLoading] = useState(true);
	const [allArtworks, setAllArtworks] = useState({});

	const fetchArtworks = async () => {
		let artworks = {};

		let response;
		let data;

		try {
			response = await fetch('http://localhost:8080/api/artworks');
			data = await response.json();
		} catch (e) {
			setLoading(false);
		}

		try {
			data.forEach(obj => {
				let artist = new Artist(
					obj.artist.id,
					obj.artist.firstName,
					obj.artist.lastName,
					obj.artist.location
				);
				let styles = [];
				obj.styles.forEach(style => {
					styles.push(new Style(style.id, style.name));
				});
				let details = new ArtworkDetails(
					obj.details.id,
					obj.details.media,
					obj.details.yearCreated,
					obj.details.description,
					obj.details.width,
					obj.details.height,
					obj.details.depth,
					obj.details.imageId
				);
				let artwork = new Artwork(obj.id, obj.title, artist, styles, details);
				artworks[artwork.id] = artwork;
			});
		} catch (e) {
			console.log('Unable to create artwork objects without data.');
		}

		setAllArtworks(artworks);
	};

	useEffect(() => {
		fetchArtworks();
	}, []);

	useEffect(() => {
		if (Object.values(allArtworks).length > 0) {
			setLoading(false);
		}
	}, [allArtworks]);

	return (
		<BrowserRouter>
			<React.StrictMode>
				<Header />
				{loading && <Loading />}
				{!loading && (
					<Routes>
						{!isEmpty(allArtworks) && (
							<>
								<Route path="/" element={<Artworks artworks={allArtworks} />} />
								<Route
									path="/artworks"
									element={<Artworks artworks={allArtworks} />}
								/>
								<Route
									path="artworks/:id"
									element={<Details artworks={allArtworks} />}
								/>
							</>
						)}
						<Route path="*" element={<Navigate to="/" />} />
					</Routes>
				)}
				{!loading && isEmpty(allArtworks) && (
					<ErrorPage>
						Sorry, our collection of artwork is unavailable at this time. We're on it!
					</ErrorPage>
				)}
			</React.StrictMode>
		</BrowserRouter>
	);
}

export default App;
