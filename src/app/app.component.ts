import { Component } from '@angular/core';

import { _ } from 'lodash';

import { Workout } from './class/Workout';
import { WorkoutService } from './workout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Workout Pro';
}
