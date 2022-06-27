import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './components/activity/activity.component';
import { CarComponent } from './components/car/car.component';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';
import { FlightComponent } from './components/flight/flight.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { SortByFlightComponent } from './sort-by-flight/sort-by-flight.component';

const routes: Routes = [
    { path: '', component: FlightComponent },
    { path: 'car', component: CarComponent },
    { path: 'hotel', component: HotelComponent },
    { path: 'activity', component: ActivityComponent },
    { path: 'flight-details', component: FlightDetailsComponent },
    { path: 'flight-sort', component: SearchFlightComponent},
    { path: 'flight-search', component: SortByFlightComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
