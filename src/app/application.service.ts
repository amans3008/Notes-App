import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})


export class SERVICE  {

    constructor(private http: HttpClient,
        private router: Router,
        ){}

    postArray:any;

    createandstore()
    {
        this.http.get('https://notes-6ff62-default-rtdb.firebaseio.com/posts.json').pipe(map(responseData=> {
        
      return this.formatState(responseData); 
      })
      )
       .subscribe(posts => {
         this.postArray = posts;
             this.router.navigate(['/home']);
       });
       return this.postArray;
       
    }
    sendData(){
            this.http.get('https://notes-6ff62-default-rtdb.firebaseio.com/posts.json').pipe(map(responseData=> {
            
          return this.formatState(responseData); 
          })
          )
           .subscribe(posts => {
             this.postArray = posts;
           });
           return this.postArray;
           
        } 
    formatState(body:any) {
        let stateArray = [];
        if(body)
        for (const [key, value] of Object.entries(body)) {
          stateArray.push({
            Key: key,
            Value: value,
          });
        }
        // console.log("state array",stateArray)
         this.postArray = stateArray;
        return stateArray;
      }
}