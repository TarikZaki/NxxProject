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
  @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() fullWidth = false;
  requiredData = input.required<string>();

  get buttonClass(): string {
    const base = 'btn-base';

    const variants = {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      outline: 'btn-outline',
    };

    const sizes = {
      sm: 'text-sm px-3 py-1.5',
      md: 'text-base px-4 py-2',
      lg: 'text-lg px-6 py-3',
    };

    const width = this.fullWidth ? 'w-full' : '';
    const disabledClass = this.disabled
      ? 'opacity-50 cursor-not-allowed'
      : 'cursor-pointer';

    return `${base} ${variants[this.variant]} ${
      sizes[this.size]
    } ${width} ${disabledClass}`;
  }
}
