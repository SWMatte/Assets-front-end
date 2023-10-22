import { Component, Input, OnInit } from '@angular/core';
import { InfoAssetComponent } from '../info-asset/info-asset.component';
import { MatDialog } from '@angular/material/dialog';
 import { BehaviorInfoAssetService } from 'src/app/service/behavior-info-asset.service';
import { AssetView } from 'src/app/models/AssetView';

@Component({
  selector: 'app-table-asset',
  templateUrl: './table-asset.component.html',
  styleUrls: ['./table-asset.component.css'],
})
export class TableAssetComponent   {
  @Input()
  listView: any; //questa lista arriva dal parent asset
   
  value: AssetView; // questo parametro lo passo al subject

   
  constructor(
    public dialog: MatDialog,
    private behaviorInfoAsset: BehaviorInfoAssetService
   
  ) {}

 
  info(value: AssetView) {
    this.value = value;
    this.behaviorInfoAsset.updateInfoAsset(this.value);
    this.dialog.open(InfoAssetComponent);
  }
}
