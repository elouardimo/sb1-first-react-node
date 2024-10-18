import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h1>Simple Todo App</h1>
    <input [(ngModel)]="newTodo" (keyup.enter)="addTodo()" placeholder="Add a new todo">
    <button (click)="addTodo()">Add</button>
    <ul>
      <li *ngFor="let todo of todos; let i = index">
        {{ todo }}
        <button (click)="removeTodo(i)">Remove</button>
      </li>
    </ul>
  `,
})
export class App {
  todos: string[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push(this.newTodo.trim());
      this.newTodo = '';
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}

bootstrapApplication(App);