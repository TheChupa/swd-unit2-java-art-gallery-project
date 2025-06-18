package org.launchcode.art_gallery_spring_java_back_end.models;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
public class Artwork {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;

    @Column(name="title") // this is optional
    private String title;

    @Column(name="artist") // this is also optional
    private String artist;

    // A default constructor is required for database
    public Artwork() {};

    public Artwork(String title, String artist) {
        this.title = title;
        this.artist = artist;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    @Override
    public String toString() {
        return title + " (" + artist + ")";
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Artwork artwork = (Artwork) o;
        return id == artwork.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
