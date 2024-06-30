//angular tool
import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// material module
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
//page
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './share/share.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, ErrorComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
