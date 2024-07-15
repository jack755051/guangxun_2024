//angular tool
import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// material module
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
//page
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './share/share.module';
import { CarouselComponent } from './utils/components/carousel/carousel.component';
import { LatestNewsComponent } from './pages/latest-news/latest-news.component';
import { AboutGuangxunComponent } from './pages/about-guangxun/about-guangxun.component';
import { TechnicalSupportComponent } from './pages/technical-support/technical-support.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ProductCenterComponent } from './pages/product-center/product-center.component';
import { ManageComponent } from './pages/manage/manage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    LoginComponent,
    CarouselComponent,
    LatestNewsComponent,
    AboutGuangxunComponent,
    TechnicalSupportComponent,
    FaqComponent,
    ProductCenterComponent,
    ManageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    // material module
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatCardModule,
    MatExpansionModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
