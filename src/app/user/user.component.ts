import {
  Component,
  Input,
  input,
  Output,
  computed,
  EventEmitter,
  output,
} from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: false,
 
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter();
  // select = output<string>();
  @Input({ required: true }) selected!: boolean;

  imagePath = computed(() => {
    return 'assets/users/' + this.user.avatar;
  });

  onSelectedUser() {
    this.select.emit(this.user.id);
  }
}
