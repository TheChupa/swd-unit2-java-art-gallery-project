package org.launchcode.art_gallery_spring_java_back_end.controllers;

import org.springframework.web.bind.annotation.*;

@RestController
public class GalleryController {

    // Corresponds to http://localhost:8080
    @GetMapping("/")
    public String renderHomePage() {
        return "<h2>Midtown Art Gallery</h2>" +
                "<p>Welcome! View our <a href='/artworks'>collection</a> of fine art.</p>";
    }

}
