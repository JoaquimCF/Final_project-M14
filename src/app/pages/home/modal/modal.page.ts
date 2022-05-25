import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  manga;

  constructor(private modalController: ModalController, private navParams: NavParams

    ) { }

  ngOnInit() {
    this.manga = this.navParams.data.manga;
    console.log(this.manga);
  }


  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }
}
