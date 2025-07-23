import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import {
	Artworks,
	ErrorPage,
	Details,
	Header,
	Loading,
} from './components/public/exports';
import { Artist, Artwork, ArtworkDetails, Category } from './classes/exports';
import { isEmpty } from './shared/utils';
import './App.css';

function App() {
	const [loading, setLoading] = useState(true);
	const [allArtworks, setAllArtworks] = useState({});

	const fetchArtworks = async () => {
		let artworks = [];

		let response;
		let data;

		try {
			response = await fetch('http://localhost:8080/api/artworks');
			data = await response.json();
            console.log(data);
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
                console.log('artist', artist)
				let categories = [];
				obj.categories.forEach(category => {
					categories.push(new Category(category.id, category.title));
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
                console.log('details', details)
				let artwork = new Artwork(obj.id, obj.title, details, artist, categories);
                console.log('artwork', artwork);
				artworks.push(artwork);
			});
		} catch (e) {
			console.log('Unable to create artwork objects.');
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
