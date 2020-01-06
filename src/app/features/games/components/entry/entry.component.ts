import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Output() addedItem = new EventEmitter<string>();
  title = 'Your VideoGames';
  constructor() { }

  ngOnInit() {
  }

  addItem(item: HTMLInputElement) {
    console.log(item.value);
    this.addedItem.emit(item.value);
    item.value = '';
    item.focus();
  }

}