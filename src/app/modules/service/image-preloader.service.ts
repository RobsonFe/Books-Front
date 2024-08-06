import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImagePreloaderService {
  preloadImage(src: string): void {
    const img = new Image();
    img.src = src;
  }
  preloadImages(srcArray: string[]): void {
    srcArray.forEach((src) => this.preloadImage(src));
  }
}
