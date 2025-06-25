package org.launchcode.art_gallery_spring_java_back_end.controllers;



import org.launchcode.art_gallery_spring_java_back_end.models.Category;
import org.launchcode.art_gallery_spring_java_back_end.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.ListIterator;

@RestController
@RequestMapping("api/categories")
public class CategoryController {

    @Autowired
    CategoryRepository categoryRepository;


    @GetMapping("")
    public ResponseEntity<?> getAllCategories() {
        List<Category> allCategories = categoryRepository.findAll();
        return new ResponseEntity<>(allCategories, HttpStatus.OK); //200
    }

    @PostMapping("add")
    public ResponseEntity<?> createNewCategory(@RequestParam(value="title") String title) {
        Category newCategory = new Category(title);
        categoryRepository.save(newCategory);
        return new ResponseEntity<>(newCategory, HttpStatus.CREATED);// 201
    }
}
