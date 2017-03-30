import { Component } from '@angular/core';
import { _ } from 'lodash';

import { Exercise } from './class/exercise';
import { Workout } from './class/workout';

const Exercises: Exercise[] = [
  {id: 1, name: "Deadlift", desc: ""},
  {id: 2, name: "Benchpress", desc: ""},
  {id: 3, name: "Squat", desc: ""}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '5x5 Workout';
  exercises = Exercises;
  onSelect = function(exercise: Exercise): void {
    console.log(exercise);
  }
}
