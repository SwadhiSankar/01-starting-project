import { Component, EventEmitter, Output } from '@angular/core';
import { UserComponent } from '../../user/user.component';
import { FormsModule } from '@angular/forms';
import { type NewTasks } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<any>();
  @Output() add = new EventEmitter<NewTasks>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    });
  }

  isSubmit(): boolean {
    if (
      this.enteredTitle !== '' &&
      this.enteredDate !== '' &&
      this.enteredSummary !== ''
    ) {
      return false;
    }
    return true;
  }
}
