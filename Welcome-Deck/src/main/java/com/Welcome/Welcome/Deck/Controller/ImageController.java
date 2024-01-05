package com.Welcome.Welcome.Deck.Controller;

import com.Welcome.Welcome.Deck.Entity.ImageData;
import com.Welcome.Welcome.Deck.Service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/image")
public class ImageController {
    @Autowired
    ImageService imageService;

    @GetMapping("/{id}")
    public ResponseEntity<?> getImageById(@PathVariable Long id) {
        byte[] imageData=imageService.getImageById(id);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/png"))
                .body(imageData);
//        byte[] imageData = imageService.getImageById(id);
//        if (imageData != null) {
//            return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(imageData.getImageData());
//        } else {
//            return ResponseEntity.notFound().build();
//        }
    }
    @PostMapping("/upload")
    public ResponseEntity<?> uploadImage(@RequestParam("file") MultipartFile file, @RequestParam Long id) throws IOException {
        String uploadImage = imageService.saveImage(file, id);
        return ResponseEntity.status(HttpStatus.OK)
                .body(uploadImage);
    }
}
