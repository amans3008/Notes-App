import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { SERVICE } from '../application.service';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  notes:any[]=[];

  constructor(private router: Router,
    private service: AppComponent,
    private ss: SERVICE,
    private http: HttpClient
      ) { }

  ngOnInit(): void {
    this.notes = this.ss.createandstore();
    // this.cardsData.ngOnInit();
    // this.notes = this.ss.sendData();
    

  }

  // onclick(){
  //   this.router.navigate(['/'])
  // }

  onDelete(id:any){
    // this.notes = this.notes.filter(item=> item != id)
    this.http.delete('https://notes-6ff62-default-rtdb.firebaseio.com/posts/'+id.Key+'.json')
    .subscribe(()=>{
      this.notes = this.ss.sendData();
      console.log("delete me");

    })
  }

  onDeleteNotes(){
    return this.http.delete('https://notes-6ff62-default-rtdb.firebaseio.com/posts.json');
  }

  onDeleteAll(){
    this.onDeleteNotes().subscribe(()=>{
      this.notes = [];
    })
  }
}
