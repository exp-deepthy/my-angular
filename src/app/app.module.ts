import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SuccessUserComponent } from './success-user/success-user.component';
import { Routes, RouterModule } from '@angular/router';
import { SucessDirective} from './shared/sucess.directive';
import { CountryService } from './shared/country.service';
import { StateService } from './shared/state.service';
import { CountryCoronaComponent } from './country-corona/country-corona.component';
import { CountryDetailsComponent } from './country-corona/country-list/country-details/country-details.component';
import { TotalCasesComponent } from './country-corona/country-list/country-details/total-cases/total-cases.component';
import { HeaderComponent } from './header/header.component';
import { CountryListComponent } from './country-corona/country-list/country-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent } ,
  { path: 'success-user', component: SuccessUserComponent},
  { path: 'countries', component: CountryCoronaComponent, children: [
      {path: ':id', component: CountryDetailsComponent, children: [
        {path: 'state', component: TotalCasesComponent},
      ]},
    ]}
   ];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuccessUserComponent,
    SucessDirective,
    CountryDetailsComponent,
    CountryCoronaComponent,
    TotalCasesComponent,
    HeaderComponent,
    CountryListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [CountryService,StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
