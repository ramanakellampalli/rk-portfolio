import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '400ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = 'rk-portfolio';
  imageUrls: string[] = [];

  activeTab: string = 'about'; // Initial active tab

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  changeTab(tabName: string): void {
    this.activeTab = '';
    this.activeTab = tabName;
  }

  ngOnInit(): void {
    this.getImageUrls().subscribe((urls) => {
      this.imageUrls = urls;
    });
  }

  getImageUrls(): Observable<string[]> {
    // Replace this with your actual image URLs
    const imageUrls: string[] = [
      'assets/skill-images/1.jpg',
      'assets/skill-images/2.jpg',
      'assets/skill-images/3.jpg',
      'assets/skill-images/4.jpg',
      'assets/skill-images/5.jpg',
      'assets/skill-images/6.jpg',
      'assets/skill-images/7.jpg',
      'assets/skill-images/8.jpg',
      'assets/skill-images/9.jpg',
      'assets/skill-images/10.jpg',
      'assets/skill-images/11.jpg',
      'assets/skill-images/12.jpg',
      'assets/education/ms.jpg',
      'assets/education/btech.jpg'
    ];

    return of(imageUrls);
  }
}
