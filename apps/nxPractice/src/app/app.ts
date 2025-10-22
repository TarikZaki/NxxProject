import { Button } from '@org/ui';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { Input } from '@org/ui';

@Component({
  imports: [NxWelcome, RouterModule, Input, Button ],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'nxPractice';
}
