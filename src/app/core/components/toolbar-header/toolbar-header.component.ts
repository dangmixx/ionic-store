import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-toolbar-header',
  templateUrl: './toolbar-header.component.html',
  styleUrls: ['./toolbar-header.component.scss'],
})
export class ToolbarHeaderComponent implements OnInit {
  @Input() titleHeader = '';
  @Input() canBack: boolean;
  previousUrl = '';
  constructor(private location: Location) {}

  ngOnInit() {}

  backHome() {
    this.location.back();
  }
}
