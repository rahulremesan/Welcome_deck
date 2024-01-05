package com.Welcome.Welcome.Deck.Service;

import com.Welcome.Welcome.Deck.Entity.ImageData;
import com.Welcome.Welcome.Deck.Repo.ImageRepository;
import com.Welcome.Welcome.Deck.util.ImageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@Service
public class ImageService {
    @Autowired
    ImageRepository imageRepository;

    public String saveImage(MultipartFile file,  Long id) throws IOException {
        ImageData imageData = imageRepository.save(ImageData.builder()
                .id(id)
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .imageData(ImageUtils.compressImage(file.getBytes())).build());
        if (imageData != null) {
            return "file uploaded successfully : " + file.getOriginalFilename();
        }
        return null;
//        try {
//            ImageData imageData = new ImageData();
//            imageData.setImageData(file.getBytes());
//            imageData.setIdProfilePicture(id);
//            ImageData savedImage = imageRepository.save(imageData);
//            return savedImage.getIdProfilePicture();
//        }catch (IOException e){
//            throw  new RuntimeException("Upload failed" + e.getMessage());
//        }
    }


    public byte[] getImageById(Long id){
        Optional<ImageData> dbImageData = imageRepository.findById(id);
        byte[] images= ImageUtils.decompressImage(dbImageData.get().getImageData());
        return images;
//        return imageRepository.findById(idProfilePicture).orElse(null);
    }
}
