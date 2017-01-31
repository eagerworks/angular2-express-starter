import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'page',
  templateUrl: '../templates/page.component.html',
})

export class PageComponent implements OnInit {
  message: string;

  ngOnInit(): void {
    this.message = 'Another page!'
  }
}
