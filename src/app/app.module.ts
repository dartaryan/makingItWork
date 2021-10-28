import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { RedComponent } from './red/red.component';
import { BlueComponent } from './blue/blue.component';
import { EventHandlingExerciseComponent } from './event-handling-exercise/event-handling-exercise.component';
import { GreetingComponent } from './greeting/greeting.component';
import { CarComponent } from './car/car.component';
import { PrintTextComponent } from './print-text/print-text.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RedComponent,
    BlueComponent,
    EventHandlingExerciseComponent,
    GreetingComponent,
    CarComponent,
    PrintTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
