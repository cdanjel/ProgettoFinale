import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MioHeaderComponent } from './mio-header/mio-header.component';

import { MioFooterComponent } from './mio-footer/mio-footer.component';
import { MioLoginComponent } from './mio-login/mio-login.component';
import { UserlistComponent } from './userlist/userlist.component';

@NgModule({
  declarations: [
    AppComponent,
    MioHeaderComponent,

    MioFooterComponent,
    MioLoginComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
