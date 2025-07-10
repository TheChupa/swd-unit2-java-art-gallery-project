package org.launchcode.art_gallery_spring_java_back_end.models.dto;

import org.launchcode.art_gallery_spring_java_back_end.models.Artist;
import org.launchcode.art_gallery_spring_java_back_end.models.ArtworkDetails;
import org.launchcode.art_gallery_spring_java_back_end.models.Category;

public class ArtworkDTO {

    private String title;
    private int artistId;
    private int categoryId;
    private ArtworkDetails details;

    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }

    public int getArtistId() {
        return artistId;
    }
    public void setArtistId(int artistId) {
        this.artistId = artistId;
    }

    public int getCategoryId() {
        return categoryId;
    }
    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public ArtworkDetails getDetails() {
        return details;
    }
    public void setDetails(ArtworkDetails details) {
        this.details = details;
    }
}
