import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from "@angular/forms";
import {ApiService} from "../services/api.service";
import {UserModel} from "../Models/user.model";
import {identity} from "rxjs";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  myForm!: FormGroup   ;
  userModelObj : UserModel = new UserModel();
  userData! : any;

  constructor(private formbuilder:FormBuilder, private api : ApiService) {

  }

  ngOnInit(): void {

    this.myForm = this.formbuilder.group({
      nom: [''],
      prenom: [''],
      utilisateur:[''],
      matricule: [''],
      etat:[''],
      date: [''],

    });

    this.get();

  }




  post(){
    // @ts-ignore
    this.userModelObj.nom = this.myForm.value.nom;
    // @ts-ignore
    this.userModelObj.prenom = this.myForm.value.prenom;
    // @ts-ignore
    this.userModelObj.utilisateur = this.myForm.value.utilisateur;
    // @ts-ignore
    this.userModelObj.date = this.myForm.value.date;
    // @ts-ignore
    this.userModelObj.etat = this.myForm.value.etat;
    // @ts-ignore
    this.userModelObj.matricule = this.myForm.value.matricule;


    this.api.postUser(this.userModelObj)
      .subscribe(res=>{console.log(res);
        alert('Utilisateur a été ajouté avec succes')
        let ref = document.getElementById('fermer')
        ref?.click();
        this.myForm.reset();
        this.get();

      },
       err =>{ alert('Errors') })
  }


  get(){
    this.api.getUser()
      .subscribe((res=>{
        this.userData = res;
      }))
  }

  delete(row : any){
    this.api.deleteUser(row)
      .subscribe(res=> {
        alert('Utilisateur supprimé');
        this.get();
      })

  }


}
