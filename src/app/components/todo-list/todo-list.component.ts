import { Component, OnInit } from '@angular/core';
import { TodoListItem } from '../../models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  entrytitle = 'Add Your Stuff';
  stuff: TodoListItem[] = [
    { id: 1, description: 'Rake Leaves', complete: true },
    { id: 2, description: 'other stuff', complete: false },

  ];

  nextId = 3;
  constructor() { }

  ngOnInit() {
  }

  addThingToList(description: string) {
    this.stuff = [{ id: this.nextId++, description, complete: false }, ...this.stuff];
  }
}
