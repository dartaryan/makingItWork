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
import { DownloadsComponent } from './downloads/downloads.component';
import { ErrorComponent } from './error/error.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { CustomAttributeDirective } from './custom-attribute.directive';
import { RoutingExampleComponent } from './routing-example/routing-example.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RedComponent,
    BlueComponent,
    EventHandlingExerciseComponent,
    GreetingComponent,
    CarComponent,
    PrintTextComponent,
    DownloadsComponent,
    ErrorComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    CustomAttributeDirective,
    RoutingExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
