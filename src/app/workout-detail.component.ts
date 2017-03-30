import { Component, Input } from '@angular/core';

import { Workout } from './class/Workout';

@Component({
  selector: 'workout-detail',
  templateUrl: './workout-detail.component.pug',
  styleUrls: ['./workout-detail.component.scss']
})
export class WorkoutDetailComponent {
  @Input() workout: Workout;
}
