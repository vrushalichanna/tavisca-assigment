import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabComponent } from './shared/tab/tab.component';
import { FlightComponent } from './components/flight/flight.component';
import { CarComponent } from './components/car/car.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { ActivityComponent } from './components/activity/activity.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';
import { HeaderComponent } from './shared/header/header.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { SortByFlightComponent } from './sort-by-flight/sort-by-flight.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    FlightComponent,
    CarComponent,
    HotelComponent,
    ActivityComponent,
    FlightDetailsComponent,
    HeaderComponent,
    SearchFlightComponent,
    SortByFlightComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
