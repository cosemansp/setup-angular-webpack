import { Component } from '@angular/core'

@Component({
  selector: 'app',
  template: `
    <h1>
      {{title}}
    </h1>
    <h2>Value: {{value}}</h2>
    <button class="increment" (click)="onIncrementClick()">+</button>
  `,
})
export class AppComponent {
  title = 'app works'
  value = 0

  onIncrementClick() {
    this.value += 1
  }
}
