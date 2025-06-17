package org.launchcode.art_gallery_spring_java_back_end.controllers;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/artworks")
public class ArtworkController {

    // TODO: Create Artwork model to handle nextId, id, title, and artist for each artwork
    //  and remove nextId from here
    private static int nextId = 6;

    // TODO: Refactor to use instances of the Artwork class
    private static final Map<Integer, String> artworks = new HashMap<>() {{
        put(1, "Girl with a Pearl Earring");
        put(2, "Mona Lisa");
        put(3, "The Birth of Venus");
        put(4, "The Persistence of Memory");
        put(5, "The Starry Night");
    }};

    // Corresponds to http://localhost:8080/artworks
    @GetMapping("")
    public String renderArtworksHomePage() {
        StringBuilder artworksList = new StringBuilder();
        for (int artworkId : artworks.keySet()) {
            String artwork = artworks.get(artworkId);
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

    // TODO: Refactor to accommodate title and artist inputs
    // Corresponds to http://localhost:8080/artworks/add
    @GetMapping("/add")
    public String renderAddArtworkForm() {
        return "<html>" +
                "<body>" +
                "<form action='/artworks/add' method='POST'>" +
                "<p>Enter the name of a new work of art:</p>" +
                "<input type='text' name='artwork' />" +
                "<button type='submit'>Submit</button>" +
                "</form>" +
                "</body>" +
                "</html>";
    }

    // TODO: Update to accept title and artist query parameters
    // Use a query parameter for dynamic results
    // Corresponds to http://localhost:8080/artworks/add?artwork=The+Starry+Night (for example)
    @PostMapping("/add")
    public String processAddArtworkForm(@RequestParam(value="artwork") String artwork) {
        artworks.put(nextId, artwork);
        nextId++;
        return "<html>" +
                "<body>" +
                "<h3>ARTWORK ADDED</h3>" +
                "<p>You have successfully added " + artwork + " to the collection.</p>" +
                "<p><a href='/artworks/add'>Add another artwork</a> or <a href='/artworks'>view the updated list</a> of artworks.</p>" +
                "</body>" +
                "</html>";
    }

    // TODO: Update to display title and artist using properties of artist object
    // Use a path parameter for dynamic results
    // Corresponds to http://localhost:8080/artworks/details/3 (for example)
    @GetMapping("/details/{artworkId}")
    public String displayArtworkDetails(@PathVariable(value="artworkId") int artworkId) {
        return "<html>" +
                "<body>" +
                "<h3>Artwork</h3>" +
                "<p><b>ID:</b> " + artworkId + "</p>" +
                "<p><b>Name:</b> " + artworks.get(artworkId) + "</p>" +
                "</body>" +
                "</html>";
    }

}
