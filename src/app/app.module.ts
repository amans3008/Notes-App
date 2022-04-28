import { NgModule } from '@angular/core';
// import { NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', component: CardsComponent 
      },
      {
        path: 'home', component: HomeComponent
      },
      // {
      //   path: 'home', component: HomeComponent
      // },
      
    ])
    // NgModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
