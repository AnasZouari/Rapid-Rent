import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BookingComponent } from './pages/booking/booking.component';
import { MyBookingComponent } from './pages/my-booking/my-booking.component';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [
    {
        path : '',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'search',
        component:SearchComponent
    },
    {
        path:'booking',
        component:BookingComponent
    },
    {
        path:'my-bookings',
        component:MyBookingComponent
    }
];
