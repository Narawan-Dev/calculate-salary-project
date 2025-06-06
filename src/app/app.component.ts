import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculateComponent } from './calculate/calculate.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalculateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calculate_salary_project';
}
