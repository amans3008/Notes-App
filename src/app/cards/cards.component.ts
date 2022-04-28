import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SERVICE } from '../application.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {
  postArray:any;


  constructor(private http: HttpClient,
    private router: Router,
    private ss: SERVICE) { }

  ngOnInit() {
    console.log("cards called");
    // this.ss.createandstore();
    this.ss.sendData();
  }

  submit(formData:object){
    this.http.post(
      'https://notes-6ff62-default-rtdb.firebaseio.com/posts.json',
       formData)
       .subscribe(responsedata => {
        this.fetchdata();
       });
  }

  onFetchData(){
    return  this.fetchdata();
  }

  private fetchdata(){
    this.ss.createandstore();
  }

}
