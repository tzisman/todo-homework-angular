import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ToDo } from '../shared/to-do';
import { ToDoStatus } from '../shared/to-do-status';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-to-do-list',
  imports: [CommonModule, DatePipe, FormsModule],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.scss',
})
export class ToDoList {
  edited?: ToDo;
  
  newToDo: ToDo = {id: crypto.randomUUID(), title: '', deadline: new Date(), status: 0};
  list: ToDo[] = [
    {id: crypto.randomUUID(), title: 'Task 1', deadline: new Date(2026, 1, 18), status: 0},
    {id: crypto.randomUUID(), title: 'Task 2', deadline: new Date(2024,2,15), status: 1},
    {id: crypto.randomUUID(), title: 'Task 3', deadline: new Date(2027, 11, 31), status: 2}
  ]

  isPass(td: ToDo) {
    return td.deadline < new Date();
  }

  updateStatus(td: ToDo, newStatus: ToDoStatus) {
    td.status = newStatus;
  }

  edit(toDo: ToDo) {
    if(toDo === this.edited) {
      this.edited = undefined;
    } else{
      this.edited = toDo;
    }
  }

  delete(toDo: ToDo) {
    this.list = this.list.filter(td => td !== toDo);
  }

  addNew() {
    this.newToDo.deadline = new Date(this.newToDo.deadline);
    this.list.push(this.newToDo);
    this.newToDo = {id: crypto.randomUUID(), title: '', deadline: new Date(), status: 0};
  }
}
