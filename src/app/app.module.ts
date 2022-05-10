import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ViewClientsComponent } from './main-page/view-clients/view-clients.component';
import { HeaderComponent } from './header/header.component';
import { ClientDetailComponent } from './main-page/client-detail/client-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ViewClientsComponent,
    HeaderComponent,
    ClientDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
