package org.launchcode.art_gallery_spring_java_back_end.models;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
public class Category {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;

    @Column(name="title") // this is optional
    private String title;

    public Category(String title) {
        this.title = title;
    }

    public Category() {};

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public String toString() {
        return title;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Category category = (Category) o;
        return id == category.id;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
