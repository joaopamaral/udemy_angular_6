import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
    <div class="alert alert-success" role="alert">
      <strong>Well done!</strong> You successfully read this important alert message.
    </div>
  `
})
export class SuccessAlertComponent {
}
