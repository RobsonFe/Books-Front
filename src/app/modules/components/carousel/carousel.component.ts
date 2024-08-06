import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ImagePreloaderService } from '../../service/image-preloader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent implements OnInit, AfterViewInit {
  images: string[] = [
    'https://wallpapers.com/images/featured/rpg-7qkduq3j0830hou6.jpg',
    'https://meups.com.br/wp-content/uploads/2023/02/jogo-da-io-interactive-1.jpg',
    'https://i.pinimg.com/originals/71/77/82/717782d78ee313d43a22fdc314c78da9.jpg',
    'https://images5.alphacoders.com/129/1299476.png',
    'https://www.adrenaline.com.br/wp-content/uploads/2020/12/condado-senhor-dos-aneis-realista-unreal-engine-4.jpg',
  ];
  currentIndex = 0;

  constructor(private imagePreloader: ImagePreloaderService) {}

  ngOnInit(): void {
    this.imagePreloader.preloadImages(this.images);
  }

  ngAfterViewInit(): void {
    this.startCarousel();
  }

  startCarousel(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000); // Troca a imagem a cada 3 segundos
  }

  prevSlide(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
