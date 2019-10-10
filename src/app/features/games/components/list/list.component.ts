import { Component, OnInit, Input } from '@angular/core';
import { GameListModel } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() model: GameListModel[] = [];

  constructor() { }

  ngOnInit() {
  }

}
