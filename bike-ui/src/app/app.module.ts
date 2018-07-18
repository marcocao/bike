import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from'@angular/forms';

import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';

import { BikeService } from './services/bike.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';

import { RestangularModule, Restangular } from 'ngx-restangular';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CallbackComponent } from './components/callback/callback.component';

// Function for setting the default restangular configuration
export function RestangularConfigFactory (RestangularProvider) {
  RestangularProvider.setBaseUrl('/server/api/v1');
  }

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    CallbackComponent,
    ViewRegistrationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    // Importing RestangularModule and making default configs for restanglar
    RestangularModule.forRoot(RestangularConfigFactory),
    AppRoutingModule
  ],
  providers: [BikeService,AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
