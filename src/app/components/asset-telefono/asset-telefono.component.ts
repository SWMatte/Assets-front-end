import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-asset-telefono',
  templateUrl: './asset-telefono.component.html',
  styleUrls: ['./asset-telefono.component.css']
})
export class AssetTelefonoComponent implements OnInit{
  systemOperative : string[] = ['android','IOS']

  assetTelefono!: FormGroup;
  ngOnInit(): void {
    this.assetTelefono = new FormGroup({
      stato: new FormControl(''),
      marca : new FormControl(),
      numeroSeriale : new FormControl(),
      sim : new FormControl(),
      dataAssegnazione : new FormControl(),
      dataComodato : new FormControl(),
      dataRiconsegna : new FormControl(),
      ram : new FormControl(),
      storage : new FormControl(),
      sistemaOperativo : new FormControl(),
      processore : new FormControl(),
      foglioComodato : new FormControl(),
      note : new FormControl(),
    })
  }


onSubmit(){}



}
