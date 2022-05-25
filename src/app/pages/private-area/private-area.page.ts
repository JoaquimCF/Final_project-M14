import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-private-area',
  templateUrl: './private-area.page.html',
  styleUrls: ['./private-area.page.scss'],
})
export class PrivateAreaPage implements OnInit {

  constructor(private router: Router, private _apiService: ApiServiceService) { }

  ngOnInit() {
  }

  nom;
  preu;
  data;
  //imatge;

  // selectedFile(event){
  //   this.imatge = event.target.files[0];
  // }

  addManga(){
    var data = new FormData();
    data.append("nom", this.nom);
    data.append("preu", this.preu);
    data.append("data", this.data);
    //data.append('imatge', this.imatge);

    //console.log(data.nom, data.categoria, data.autor, data.volum,data.imatge);
     console.log("nom: "+this.nom,"preu: "+ this.preu, "data: "+this.data);
    this._apiService.addManga(data).subscribe((response) => {
      console.log(response);
    });
  }

  mangas:any = [];  
  nom_manga;
   

}
