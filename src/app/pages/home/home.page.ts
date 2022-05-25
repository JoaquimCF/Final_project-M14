import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';
import { OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from './modal/modal.page';
      

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit{
  mangas:any = [];

  constructor(private router: Router, private _apiService: ApiServiceService, public modalController: ModalController) {
    this.readMangas();
  }
  ngOnInit() {
  }
  
  id_manga;
  dataReturned: any;


  readMangas(){
    this._apiService.readMangas().subscribe((response) =>{
      console.log(response);
      this.mangas = this.mangas.concat(response);
    });
  }

  deleteManga(id_manga){
    alert(id_manga);
    let eliminar = {
      id: id_manga
    }

    console.log(eliminar.id);
  
      this._apiService.deleteManga(eliminar).subscribe((response) => {
        console.log(response);
       // this.showManga();
      });
    }


    async openModal(i) {
      console.log(this.mangas[i]);
      const modal = await this.modalController.create({
        component: ModalPage,
        componentProps: {
          "manga": this.mangas[i]
        }
      });
  
      modal.onDidDismiss().then((dataReturned) => {
        if (dataReturned !== null) {
          this.dataReturned = dataReturned.data;
          //alert('Modal Sent Data :'+ dataReturned);
        }
      });
  
      return await modal.present();
    }

  }
