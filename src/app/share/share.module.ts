// angular-tool
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// page component
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { DailogComponent } from './components/dailog/dailog.component';
import { CardComponent } from './components/card/card.component';
import { ErrorDailogComponent } from './components/dailog/error-dailog/error-dailog.component';
// Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    DailogComponent,
    CardComponent,
    ErrorDailogComponent,
  ],
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
  providers: [],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    DailogComponent,
    CardComponent,
  ],
})
export class SharedModule {}
