import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AF } from './providers/af'

import { AppComponent } from './app.component';
import { PopularComponent } from './popular/popular.component';
import { NewComponent } from './new/new.component';
import { CreateComponent } from './create/create.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';

export const firebaseConfig = {
    apiKey: "AIzaSyDCrV4LGfle5BkNr6NtwYkwTZvT6s-DmRw",
    authDomain: "ffbebuilds.firebaseapp.com",
    databaseURL: "https://ffbebuilds.firebaseio.com",
    storageBucket: "ffbebuilds.appspot.com",
    messagingSenderId: "712487645426"
}

const appRoutes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PopularComponent,
    NewComponent,
    CreateComponent,
    SignupComponent,
    SigninComponent,
    PageNotFoundComponent,
    HomeComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AF],
  bootstrap: [AppComponent]
})
export class AppModule { }
