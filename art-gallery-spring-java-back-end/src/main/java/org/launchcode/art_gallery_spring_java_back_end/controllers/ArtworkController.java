package org.launchcode.art_gallery_spring_java_back_end.controllers;

import org.launchcode.art_gallery_spring_java_back_end.models.Artwork;
import org.launchcode.art_gallery_spring_java_back_end.repositories.ArtworkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/artworks")
public class ArtworkController {

    @Autowired
    ArtworkRepository artworkRepository;

    // GET the full list of artworks
    // Endpoint is http://localhost:8080/api/artworks
    @GetMapping("")
    public ResponseEntity<?> getAllArtworks() {
        List<Artwork> allArtworks = artworkRepository.findAll();
        return new ResponseEntity<>(allArtworks, HttpStatus.OK); // 200
    }

    // GET a single artwork using its id
    // Corresponds to http://localhost:8080/api/artworks/details/3 (for example)
    @GetMapping(value="/details/{artworkId}", produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getArtworkById(@PathVariable(value="artworkId") int artworkId) {
        Artwork currentArtwork = artworkRepository.findById(artworkId).orElse(null);
        if (currentArtwork != null) {
            return new ResponseEntity<>(currentArtwork, HttpStatus.OK); // 200
        } else {
            String response = "Artwork with ID of " + artworkId + " not found.";
            return new ResponseEntity<>(Collections.singletonMap("response", response), HttpStatus.NOT_FOUND); // 404
        }
    }

    // POST a new artwork
    // Endpoint http://localhost:8080/api/artworks/add?title=The+Starry+Night&artist=Vincent+van+Gogh (for example)
    @PostMapping("/add")
    public ResponseEntity<?> createNewArtwork(@RequestParam(value="title") String title, @RequestParam(value="artist") String artist) {
        Artwork newArtwork = new Artwork(title, artist);
        artworkRepository.save(newArtwork);
        return new ResponseEntity<>(newArtwork, HttpStatus.CREATED); // 201
    }

    // DELETE an existing artwork
    // Corresponds to http://localhost:8080/api/artworks/delete/6 (for example)
    @DeleteMapping(value="/delete/{artworkId}", produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> deleteArtworks(@PathVariable(value="artworkId") int artworkId) {
        Artwork currentArtwork = artworkRepository.findById(artworkId).orElse(null);
        if (currentArtwork != null) {
            artworkRepository.deleteById(artworkId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); // 204
        } else {
            String response = "Artwork with ID of " + artworkId + " not found.";
            return new ResponseEntity<>(Collections.singletonMap("response", response), HttpStatus.NOT_FOUND); // 404
        }
    }

}
