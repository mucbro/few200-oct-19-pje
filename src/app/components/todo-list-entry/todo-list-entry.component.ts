import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list-entry',
  templateUrl: './todo-list-entry.component.html',
  styleUrls: ['./todo-list-entry.component.css']
})
export class TodoListEntryComponent implements OnInit {

  @Output() addedItem = new EventEmitter<string>();
  title = 'Your Things to do';
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
