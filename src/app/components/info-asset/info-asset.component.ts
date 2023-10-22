import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorInfoAssetService } from 'src/app/service/behavior-info-asset.service';

@Component({
  selector: 'app-info-asset',
  templateUrl: './info-asset.component.html',
  styleUrls: ['./info-asset.component.css']
})
export class InfoAssetComponent implements OnInit {
 
  value:any
  
   constructor(private behaviorInfoAsset : BehaviorInfoAssetService) {
    
   }
  ngOnInit(): void {
        this.behaviorInfoAsset.infoAsset$.subscribe((data)=>{
          console.log(data)
          this.value=data
        })
  }

}
