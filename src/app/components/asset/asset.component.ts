import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AssetComputerComponent } from '../asset-computer/asset-computer.component';
import { AssetTelefonoComponent } from '../asset-telefono/asset-telefono.component';
import { Type } from 'src/app/models/Type';
import { lastValueFrom, of } from 'rxjs';
import { AssetViewService } from 'src/app/service/asset-view.service';
import { AssetViewHistorySearch } from 'src/app/models/AssetViewHistorySearch';
import { AssetView } from 'src/app/models/AssetView';
import { FormControl, FormGroup } from '@angular/forms';
import { Status } from 'src/app/models/Status';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css'],
})
export class AssetComponent implements OnInit {
  error: string = '';
  assetView: AssetViewHistorySearch;
  listView: AssetView; // questa lista viene mostrata all utente dal momento in cui aggiunge un asset
  loading: boolean = false;
  statusArray = Object.values(Status);
  valueArray : Array<Status>=[]
 

  constructor(
    public dialog: MatDialog,
    private assetViewservice: AssetViewService
  ) {}

  ngOnInit(): void {
    this.assetView = {
      type: Type.PC,
      search: '',
      status: [],
    };
    this.showAllPcAsset();
  }




  async showAllPcAsset() {
    try {
      this.loading = true;
      const dataAsset = this.assetViewservice.findAllData(this.assetView);
      this.listView = await lastValueFrom(dataAsset);
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  }

  openDialogComputer() {
    const dialog = this.dialog.open(AssetComputerComponent);
    dialog.afterClosed().subscribe((value) => {
      if (value) {
        this.showAllPcAsset();
      }
    });
  }
 

  searchParameter: FormGroup = new FormGroup({
    searchBar: new FormControl(''),
  });

 
 
  press() {
    const searchTerm = this.searchParameter.get('searchBar')?.value;  
    if (searchTerm === '') {
      this.assetView.search = '';  
      this.showAllPcAsset();  
    } else {
      this.assetView.search = searchTerm;  
      this.showAllPcAsset();  
    }
  }

  openDialogTelefono() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '100%';
    dialogConfig.height = '100%';

    this.dialog.open(AssetTelefonoComponent);
  }

  valueStatus(value : Status){
     
    this.valueArray.push(value)
    this.assetView.status=this.valueArray;

    // if(this.assetView.status=[]){
    //   this.showAllPcAsset();  

    // } else{
    //   this.assetView.status=valueArray
    //   this.showAllPcAsset();  
    // }
  }
}
