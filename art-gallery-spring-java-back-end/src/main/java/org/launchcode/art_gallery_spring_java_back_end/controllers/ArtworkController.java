package org.launchcode.art_gallery_spring_java_back_end.controllers;

import org.launchcode.art_gallery_spring_java_back_end.models.Artwork;
import org.launchcode.art_gallery_spring_java_back_end.repositories.ArtworkRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/artworks")
public class ArtworkController {

    // TODO: Change the base path above to /api/artworks

    // TODO: Remove controller methods where the only purpose was to provide a form on a page
    //  for server-side rendering

    // TODO: Convert remaining controller methods that perform CRUD ops
    //  so that they can handle outside requests with proper HTTP responses

    // TODO: Make sure to send alternate responses if a specific artwork does not exist in the database

    private final ArtworkRepository artworkRepository;

    public ArtworkController(ArtworkRepository artworkRepository) {
        this.artworkRepository = artworkRepository;
    }

    // Corresponds to http://localhost:8080/artworks
    @GetMapping("")
    public String renderArtworksHomePage() {
        List<Artwork> allArtworks = artworkRepository.findAll();
        StringBuilder artworksList = new StringBuilder();
        for (Artwork artwork : allArtworks) {
            artworksList.append("<li><a href='/artworks/details/").append(artwork.getId()).append("'>").append(artwork).append("</a></li>");
        }
        return """
                <html>
                <body>
                <h2>ARTWORKS</h2>
                <ul>
                """ +
                artworksList +
                """
                </ul>
                <p><a href='/artworks/add'>Add</a> another artwork or <a href='/artworks/delete'>delete</a> one or more artworks.</p>
                </body>
                </html>
                """;
    }

    // Corresponds to http://localhost:8080/artworks/add
    @GetMapping("/add")
    public String renderAddArtworkForm() {
        return """
                <html>
                <body>
                <form action='/artworks/add' method='POST'>
                <p>Enter the title and artist for a new work of art:</p>
                <input type='text' name='title' placeholder='Title' />
                <input type='text' name='artist' placeholder='Artist' />
                <button type='submit'>Submit</button>
                </form>
                </body>
                </html>
                """;
    }

    // Use a query parameter for dynamic results
    // Corresponds to http://localhost:8080/artworks/add?title=The+Starry+Night&artist=Vincent+van+Gogh (for example)
    @PostMapping("/add")
    public String processAddArtworkForm(@RequestParam(value="title") String title, @RequestParam(value="artist") String artist) {
        Artwork newArtwork = new Artwork(title, artist);
        artworkRepository.save(newArtwork);
        return """
                <html>
                <body>
                <h3>ARTWORK ADDED</h3>
                """ +
                "<p>You have successfully added " + title + " to the collection.</p>" +
                """
                <p><a href='/artworks/add'>Add</a> another artwork or view the <a href='/artworks'>updated list</a> of artworks.</p>
                </body>
                </html>
                """;
    }

    // Corresponds to http://localhost:8080/artworks/delete
    @GetMapping("/delete")
    public String renderDeleteArtworkForm() {
        List<Artwork> allArtworks = artworkRepository.findAll();
        StringBuilder artworksList = new StringBuilder();
        for (Artwork artwork : allArtworks) {
            int currId = artwork.getId();
            artworksList.append("<li><input id='").append(currId).append("' name='artworkIds' type='checkbox' value='").append(currId).append("' />").append(artwork).append("</li>");
        }
        return """
                <html>
                <body>
                <form action='/artworks/delete' method='POST'>
                <p>Select which artworks you wish to delete:</p>
                <ul>
                """ +
                artworksList +
                """
                </ul>
                <button type='submit'>Submit</button>
                </form>
                </body>
                </html>
                """;
    }

    // Corresponds to http://localhost:8080/artworks/delete?artworkIds=1+3+5
    @PostMapping("/delete")
    public String ProcessDeleteArtworkForm(@RequestParam(value="artworkIds") int[] artworkIds) {
        for (int id : artworkIds) {
            Artwork currArtwork = artworkRepository.findById(id).orElse(null);
            if (currArtwork != null) {
                artworkRepository.deleteById(id);

            }
        }
        String header = artworkIds.length > 1 ? "ARTWORKS" : "ARTWORK";
        return """
                <html>
                <body>
                <h3>
                """ +
                header +
                """
                DELETED</h3>
                <p>Deletion successful.</p>
                <p>View the <a href='/artworks'>updated list</a> of artworks.</p>
                </body>
                </html>
                """;
    }


    // Use a path parameter for dynamic results
    // Corresponds to http://localhost:8080/artworks/details/3 (for example)
    @GetMapping("/details/{artworkId}")
    public String displayArtworkDetails(@PathVariable(value="artworkId") int artworkId) {
        Artwork currentArtwork = artworkRepository.findById(artworkId).orElse(null);
        if (currentArtwork != null) {
            return """
                    <html>
                    <body>
                    <h3>Artwork Details</h3>
                    """ +
                    "<p><b>ID:</b> " + artworkId + "</p>" +
                    "<p><b>Title:</b> " + currentArtwork.getTitle() + "</p>" +
                    "<p><b>Artist:</b> " + currentArtwork.getArtist() + "</p>" +
                    """
                    </body>
                    </html>
                    """;
        } else {
            return """
                    <html>
                    <body>
                    <h3>Artwork Details</h3>
                    <p>Artwork not found. <a href='/artworks'>Return to list of artworks.</a></p>
                    </body>
                    </html>
                    """;
        }
    }

}
