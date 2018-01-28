import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {Routes,Router, RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { WelcomeComponent } from './welcome/welcome.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import {AngularFireModule} from 'angularfire2';

import { AngularFireDatabaseModule, AngularFireDatabaseProvider } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
// for AngularFireAuth
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

import { FileSaverModule } from 'ngx-filesaver'; 

export const firebaseConfig = {
  apiKey: "AIzaSyCWt1Ei_lLIPXyT95GXSiHC76_RvDi9qIw",
  authDomain: "my-profile-69f77.firebaseapp.com",
  databaseURL: "https://my-profile-69f77.firebaseio.com",
  projectId: "my-profile-69f77",
  storageBucket: "my-profile-69f77.appspot.com",
  messagingSenderId: "613979181676"
};



const routes: Routes =[
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
 
  {path: 'welcome',component: WelcomeComponent},
  {path:'portfolio', component: PortfolioComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'contact', component: ContactmeComponent}
 ]; 
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PortfolioComponent,
    SkillsComponent,
    ContactmeComponent,
    JumbotronComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    NgbModule.forRoot(),    
    RouterModule.forRoot(routes,{enableTracing: true}),
    AngularFireModule.initializeApp(firebaseConfig),
  AngularFireDatabaseModule,
  AngularFireAuthModule,
  FileSaverModule   
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule {

  
 }

 AngularFireDatabaseModule