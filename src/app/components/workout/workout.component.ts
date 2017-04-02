import { Component, OnInit } from '@angular/core';

import { Workout } from '../../classes/workout';
import { WorkoutService } from '../../services/workout/workout.service';

@Component({
  selector: 'my-workouts',
  templateUrl: './workout.component.pug',
  styleUrls: ['./workout.component.scss'],
  providers: [WorkoutService]
})
export class WorkoutComponent implements OnInit {
  title = 'Workout Pro';
  workouts: Workout[];
  selectedWorkout: Workout;

  constructor(private workoutService: WorkoutService) {
  }

  ngOnInit(): void {
    this.workoutService.getWorkouts().then(workouts => this.workouts = workouts);
  }

  onSelect(workout: Workout): void {
    this.selectedWorkout = workout;
  }
}
