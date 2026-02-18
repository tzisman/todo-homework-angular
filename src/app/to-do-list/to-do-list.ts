import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ToDo } from '../shared/to-do';

@Component({
  selector: 'app-to-do-list',
  imports: [CommonModule],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.scss',
})
export class ToDoList {
  list: ToDo[] = [
    {id: crypto.randomUUID(), title: 'Task 1', deadline: new Date(2026, 1, 18), status: 0},
    {id: crypto.randomUUID(), title: 'Task 2', deadline: new Date(2024,2,15), status: 1},
    {id: crypto.randomUUID(), title: 'Task 3', deadline: new Date(2027, 11, 31), status: 2}
  ]

  isPass(td: ToDo) {
    return td.deadline < new Date();
  }
}
