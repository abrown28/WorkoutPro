import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header.component';
import { WorkoutComponent } from './workout.component';
import { WorkoutDetailComponent } from './workout-detail.component';
import { WorkoutService } from './workout.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkoutComponent,
    WorkoutDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: 'workouts', component: WorkoutComponent },
      {path: 'workout/:id', component: WorkoutDetailComponent }
    ])
  ],
  providers: [
    WorkoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
