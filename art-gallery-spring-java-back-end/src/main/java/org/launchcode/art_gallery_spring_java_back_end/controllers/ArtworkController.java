package org.launchcode.art_gallery_spring_java_back_end.controllers;

import org.launchcode.art_gallery_spring_java_back_end.models.Artwork;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/artworks")
public class ArtworkController {

    private static final Map<Integer, Artwork> artworks = new HashMap<>() {{
        put(1, new Artwork("Girl with a Pearl Earring", "Johannes Vermeer"));
        put(2, new Artwork("Mona Lisa", "Leonardo da Vinci"));
        put(3, new Artwork("The Persistence of Memory", "Salvador Dalí"));
        put(4, new Artwork("The Starry Night", "Vincent van Gogh"));
    }};

    // Corresponds to http://localhost:8080/artworks
    @GetMapping("")
    public String renderArtworksHomePage() {
        StringBuilder artworksList = new StringBuilder();
        for (int artworkId : artworks.keySet()) {
            Artwork artwork = artworks.get(artworkId);
            artworksList.append("<li><a href='/artworks/details/").append(artworkId).append("'>").append(artwork).append("</a></li>");
        }
        return "<html>" +
                "<body>" +
                "<h2>ARTWORKS</h2>" +
                "<ul>" +
                artworksList +
                "</ul>" +
                "<p>Click <a href='/artworks/add'>here</a> to add another artwork.</p>" +
                "</body>" +
                "</html>";
    }

    // Corresponds to http://localhost:8080/artworks/add
    @GetMapping("/add")
    public String renderAddArtworkForm() {
        return "<html>" +
                "<body>" +
                "<form action='/artworks/add' method='POST'>" +
                "<p>Enter the title and artist for a new work of art:</p>" +
                "<input type='text' name='title' placeholder='Title' />" +
                "<input type='text' name='artist' placeholder='Artist' />" +
                "<button type='submit'>Submit</button>" +
                "</form>" +
                "</body>" +
                "</html>";
    }

    // Use a query parameter for dynamic results
    // Corresponds to http://localhost:8080/artworks/add?title=The+Starry+Night&artist=Vincent+van+Gogh (for example)
    @PostMapping("/add")
    public String processAddArtworkForm(@RequestParam String title, String artist) {
        Artwork newArtwork = new Artwork(title, artist);
        artworks.put(newArtwork.getId(), newArtwork);
        return "<html>" +
                "<body>" +
                "<h3>ARTWORK ADDED</h3>" +
                "<p>You have successfully added " + title + " to the collection.</p>" +
                "<p><a href='/artworks/add'>Add another artwork</a> or <a href='/artworks'>view the updated list</a> of artworks.</p>" +
                "</body>" +
                "</html>";
    }

    // Use a path parameter for dynamic results
    // Corresponds to http://localhost:8080/artworks/details/3 (for example)
    @GetMapping("/details/{artworkId}")
    public String displayArtworkDetails(@PathVariable int artworkId) {
        return "<html>" +
                "<body>" +
                "<h3>Artwork</h3>" +
                "<p><b>ID:</b> " + artworkId + "</p>" +
                "<p><b>Title:</b> " + artworks.get(artworkId).getTitle() + "</p>" +
                "<p><b>Artist:</b> " + artworks.get(artworkId).getArtist() + "</p>" +
                "</body>" +
                "</html>";
    }

}
