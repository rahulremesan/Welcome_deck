    package com.Welcome.Welcome.Deck.Entity;

    import jakarta.persistence.*;
    import lombok.*;

    @Entity
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    @Data
    @Builder
    @Table(name = "imageData")
    public class ImageData {

        @Id
        private Long id;
        private String name;
        private String type;

        @Lob
        @Column(name="imagedata", length = 10000)
        private  byte[] imageData;

    }
