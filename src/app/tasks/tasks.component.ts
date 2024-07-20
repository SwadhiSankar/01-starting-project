import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NewTasks } from './task/task.model';

@Component({
  selector: 'app-tasks',
 
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name?: string;
  @Input({ required: true }) userId!: string;
  isAddingTask = false;
  tasks = [
    {
      id: 't1',
      userId: 'u7',
      title: 'Java',
      summary: 'Learn basics OOPS',
      dueDate: '2025-12-31',
    },
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  get SelectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  onStartAddTask() {
    console.log('started', this.isAddingTask);
    this.isAddingTask = true;
    console.log('started....', this.isAddingTask);
  }

  onCancelAddTask() {
    console.log('close', this.isAddingTask);
    this.isAddingTask = false;
    console.log('close executed', this.isAddingTask);
  }

  onAddTask(taskData: NewTasks) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.isAddingTask = false;
  }
}