import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit, OnDestroy{

  images: string[] = [
    '/img/appointment.jpg',
    '/img/blood-pressure.jpg',
    '/img/blood-test.jpg'
  ];

  currentImgIndex: number = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.startImageRotation();
  }

  ngOnDestroy(): void {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
  }

  private startImageRotation(): void {
    this.intervalId = setInterval(() => {
      this.currentImgIndex = (this.currentImgIndex + 1) % this.images.length;
    }, 3000); // Change image every 3 seconds
  }

}
