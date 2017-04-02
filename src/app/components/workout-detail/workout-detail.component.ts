import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Workout } from '../../classes/workout';
import { WorkoutService } from '../../services/workout/workout.service';

@Component({
  selector: 'workout-detail',
  templateUrl: './workout-detail.component.pug',
  styleUrls: ['./workout-detail.component.scss']
})
export class WorkoutDetailComponent implements OnInit {
  @Input() workout: Workout;

  constructor(
    private workoutService: WorkoutService,
    private route: ActivatedRoute,
    private location: Location
  ) {
  }
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.workoutService.getWorkout(+params['id']))
      .subscribe(workout => this.workout = workout);
  }
}
