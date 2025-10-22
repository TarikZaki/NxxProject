import { Component, input, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './button.html',
  styleUrls: ['./button.scss'],
})
export class Button {
  requiredData = input<string>();
  label = input<string>('Click Me');
  type = input<'button' | 'submit' | 'reset'>('button');
}
