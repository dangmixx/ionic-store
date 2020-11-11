import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-voted',
  templateUrl: './star-voted.component.html',
  styleUrls: ['./star-voted.component.scss'],
})
export class StarVotedComponent implements OnInit {
  @Input() starVoted: number;
  constructor() {}

  ngOnInit() {}
}
