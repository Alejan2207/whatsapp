import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reels',
  templateUrl: './reels.page.html',
  styleUrls: ['./reels.page.scss'],
  standalone: false,
})
export class ReelsPage implements OnInit {

  reels: any[] = [
    { video: 'assets/videos/video1.mp4', avatar: 'assets/images/teto.png', username: 'usuario1', likes: '357 mil', comments: '115 mil' },
    { video: 'assets/videos/video2.mp4', avatar: 'assets/images/teto.png', username: 'usuario2', likes: '420 mil', comments: '130 mil' },
    { video: 'assets/videos/video3.mp4', avatar: 'assets/images/teto.png', username: 'usuario3', likes: '500 mil', comments: '150 mil' },
    { video: 'assets/videos/video4.mp4', avatar: 'assets/images/teto.png', username: 'usuario4', likes: '5.5 mill', comments: '150 mil' },
  ];

  slideOpts = {
    direction: 'vertical',
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
    pagination: false,
    allowTouchMove: true,
    speed: 400,
    freeMode: false,
    resistance: false,
    resistanceRatio: 0,
  };

  slideChanged() {
    const slides = document.querySelectorAll('video');
    slides.forEach((video) => video.pause());

    setTimeout(() => {
      const activeSlide = document.querySelector('ion-slide.swiper-slide-active video') as HTMLVideoElement;
      if (activeSlide) {
        activeSlide.play();
      }
    }, 200);
  }

  togglePlay(video: HTMLVideoElement) {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
