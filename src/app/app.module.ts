import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { WorkoutComponent } from './components/workout/workout.component';
import { WorkoutDetailComponent } from './components/workout-detail/workout-detail.component';
import { WorkoutService } from './services/workout/workout.service';
import { BookService } from './services/book/book.service';

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
    WorkoutService,
    BookService,
    {provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
