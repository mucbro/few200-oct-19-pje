import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FooterModel } from '../../models';
import { TodoDataService } from 'src/app/service/todo.data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  items$: Observable<FooterModel>;

  constructor(private service: TodoDataService) { }

  ngOnInit() {
    this.items$ = this.service.getData().pipe(
      map(data => {
        return {
          totalTodos: data.length,
          completedTodos: data.filter(d => d.complete).length,
          remainingTodos: data.filter(d => !d.complete).length
        } as FooterModel;
      })
    );
  }

}
