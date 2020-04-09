import { environment } from './../../environments/environment';
import { Repo } from './../repo-class/repo';
import { User } from './../user-class/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
getUser:User;
getRepos:Repo
  constructor( private http:HttpClient) {
    this.getUser=new User("","",0,0,0,0,0,"",new Date)
     this.getRepos=new Repo("","","","",new Date)
  }
SearchUser(searchName:string){
  interface Response{
     name:string,
     user_url:string,
    repo_num:number,
    overview:number,
    projects:number,
    followers:number,
    following:number,
    avatar_url:string,
    updated:Date
  }

  return new Promise((resolve,reject)=>{
    this.http.get<Response>('https://api.github.com/users/'+searchName+'?access_token='+environment.apiKey).toPromise().then( 
      (result)=>{
        this.getUser=result;
        console.log(this.getUser);
        resolve()
      },
      (error)=>{
        console.log(error);
        reject();
      }
    )
  })
}
getReopos(searchName){
 interface Repo{
  name:string,
  repo_url:string,
  description:string,
  language:string,
  updated:Date
 }
 return new Promise((resolve,reject)=>{
   this.http.get<Repo>('https:api.github.com/users/'+searchName+'/repo?order+created&sort=asc?access_token='+environment.apiKey).toPromise().then(
     (results)=>{
       this.getRepos=results;
       resolve();
     },
     (error)=>{
       console.log(error);
       reject()
     }
   )
 })
}
} 
