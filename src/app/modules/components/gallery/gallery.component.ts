import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ImagePreloaderService } from '../../service/image-preloader.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent implements OnInit {
  images: string[] = [
    'https://i.pinimg.com/564x/fe/98/25/fe9825d8a5578255799e35a95889a3a1.jpg',
    'https://i.pinimg.com/564x/64/29/0f/64290f447e6285310129e56f4e3b73f4.jpg',
    'https://i.pinimg.com/564x/57/8c/f5/578cf5e990eaeb85ccdadf786006c6a7.jpg',
    'https://i.pinimg.com/564x/28/04/54/280454139165120e98ccd85af989d8c3.jpg',
    'https://i.pinimg.com/564x/4b/04/d2/4b04d220543912fa541c5504030c8c39.jpg',
  ];

  constructor(private imagePreloader: ImagePreloaderService) {}

  ngOnInit(): void {
    this.imagePreloader.preloadImages(this.images);
  }
}
