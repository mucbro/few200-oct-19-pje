import { TodoListItem } from '../models';
import { BehaviorSubject, Observable } from 'rxjs';


export class TodoDataService {
  private data: TodoListItem[] = [
    { id: 1, description: 'suck Eggs', complete: false },
    { id: 2, description: 'type alot and not know wtf youre doing', complete: true },

  ];

  currentID = 3;

  private subject = new BehaviorSubject<TodoListItem[]>(this.data);

  getData(): Observable<TodoListItem[]> {
    return this.subject.asObservable();
  }

  addItem(description: string) {
    const itemToAdd = { id: this.currentID++, description, complete: false };
    this.data = [itemToAdd, ...this.data];
    this.subject.next(this.data);
  }

  markComplete(item: TodoListItem) {
    const stored = this.data.find(d => d.id === item.id);
    stored.complete = true;
    this.subject.next(this.data);
  }
}
