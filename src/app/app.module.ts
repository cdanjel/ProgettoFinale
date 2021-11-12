import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MioHeaderComponent } from './mio-header/mio-header.component';

import { MioLoginComponent } from './mio-login/mio-login.component';
import { UserlistComponent } from './userlist/userlist.component';
import { FormsModule } from '@angular/forms';
import { NewUserComponent } from './new-user/new-user.component';
import { PresetazioneHomeComponent } from './presetazione-home/presetazione-home.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientiComponent } from './clienti/clienti.component';
import { FattureComponent } from './fatture/fatture.component';

const routes: Routes = [
  {
    path: '',
    component: PresetazioneHomeComponent

  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users'
  },
  {
    path: 'user/userlist',
    component: UserlistComponent
  },
  {
    path: 'user/fatture',
    component: FattureComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MioHeaderComponent,
    MioLoginComponent,
    UserlistComponent,
    NewUserComponent,
    PresetazioneHomeComponent,
    ClientiComponent,
    FattureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
