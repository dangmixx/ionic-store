import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.component.html',
  styleUrls: ['./tab-home.component.scss'],
})
export class TabHomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateTab(url: string) {
    this.router.navigate(['/tab/' + url]);
  }
}
