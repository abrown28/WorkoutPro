import { Injectable } from '@angular/core';

import { Workout } from '../../classes/workout';
import { WORKOUTS } from '../../mocks/workout.mock';

@Injectable()
export class WorkoutService {
  getWorkouts(): Promise<Workout[]> {
    return Promise.resolve(WORKOUTS);
  }

  getWorkoutsDelayed(): Promise<Workout[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getWorkouts()), 5000);
    });
  }
}
