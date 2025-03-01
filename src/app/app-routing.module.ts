import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CounterComponent } from './components/counter/counter.component';
import { BooksComponent } from './features/books/books.component';
import { GamesComponent } from './features/games/games.component';


const routes: Routes = [
  {
    path: 'todos',
    component: TodoListComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'games',
    component: GamesComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
