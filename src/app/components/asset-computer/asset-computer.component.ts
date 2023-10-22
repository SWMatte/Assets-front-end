import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, lastValueFrom, map, of } from 'rxjs';

import { Asset, Type } from 'src/app/models/Asset';
import { AssetDTO } from 'src/app/models/AssetDTO';
import { Employee } from 'src/app/models/Employee';
import { Status } from 'src/app/models/Status';
import { AssetService } from 'src/app/service/asset.service';
import { DialogService } from 'src/app/service/dialog.service';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-asset-computer',
  templateUrl: './asset-computer.component.html',
  styleUrls: ['./asset-computer.component.css'],
})
export class AssetComputerComponent implements OnInit {
  antivirusEnabled: boolean[] = [true, false];
  type!: Type;
  idCompany!: number;
  idEmployee!: number;
  history: boolean = true;
  statusArray = Object.values(Status);
  durationInSeconds = 5;
  valueStatus!: Status;
  listEmployees: Employee[] = [];
  currentDate = new Date();
  loading: boolean = false;

  assetComputer: FormGroup = new FormGroup({
    brand: new FormControl('', Validators.required),
    company: new FormControl(''),
    serialNumber: new FormControl(''),
    purchaseDate: new FormControl('', [
      Validators.required,
      this.dateValidation,
    ]),
    additionalSoftware: new FormControl(''),
    additionalhardware: new FormControl(''),
    hwfeatures: new FormControl(''),
    antivirus: new FormControl<boolean>(false, [
      this.antivirusDateValidation.bind(this),
    ]),
    antivirusExpirationDate: new FormControl(''),
    status: new FormControl(''),
    employee: new FormControl(''),
    note: new FormControl(''),
  });

  constructor(
    private apiService: AssetService,
    private dialog: MatDialogRef<AssetComputerComponent>,
    private _snackBar: MatSnackBar,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.assetComputer.get('status')?.valueChanges.subscribe((newStatus) => {
      this.valueStatus = newStatus;
    });

    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.listEmployees = data;
    });
  }

  async onSubmit() {
    const brand = this.assetComputer.get('brand')?.value;
    this.idCompany = parseInt(this.assetComputer.get('company')?.value);
    const serialNumber = this.assetComputer.get('serialNumber')?.value;
    const purchaseDate = this.assetComputer.get('purchaseDate')?.value;
    const additionalSoftware =
      this.assetComputer.get('additionalSoftware')?.value;
    const additionalHardware =
      this.assetComputer.get('additionalhardware')?.value;
    const hwFeatures = this.assetComputer.get('hwfeatures')?.value;
    const hasAntivirus = this.assetComputer.get('antivirus')?.value;
    const antivirusExpirationDate = this.assetComputer.get(
      'antivirusExpirationDate'
    )?.value;
    this.idEmployee = parseInt(this.assetComputer.get('employee')?.value);

    const asset: Asset = new Asset(
      (this.type = Type.PC),
      brand,
      serialNumber,
      purchaseDate,
      additionalSoftware,
      additionalHardware,
      hwFeatures,
      hasAntivirus,
      antivirusExpirationDate
    );

    const assetDTO: AssetDTO = new AssetDTO(
      asset,
      this.valueStatus,
      this.history,
      this.idCompany,
      this.idEmployee
    );

    try {
      this.loading = true;
      const data = this.apiService.addAsset(assetDTO);
      await lastValueFrom(data);
      this.dialog.close({ result: true });
      this._snackBar.open('Asset aggiunto correttamente!', '', {
        duration: this.durationInSeconds * 1000,
      });
    } catch (error) {
    } finally {
      this.loading = false;
    }
    /*
    this.apiService.addAsset(assetDTO).subscribe((data) => {
      if (data.response === true) {
         this.dialog.close({ result:true})
        this._snackBar.open('Asset aggiunto correttamente!', '', {
          duration: this.durationInSeconds * 1000,
        });
      }
    });
*/
  }

  dateValidation(control: FormControl): { [key: string]: boolean } {
    let curDate = new Date();
    curDate = new Date(
      Date.UTC(
        curDate.getUTCFullYear(),
        curDate.getUTCMonth(),
        curDate.getUTCDate()
      )
    );
    let inputDate = new Date(control.value);
    inputDate = new Date(
      Date.UTC(
        inputDate.getUTCFullYear(),
        inputDate.getUTCMonth(),
        inputDate.getUTCDate()
      )
    );

    if (curDate > inputDate) {
      return { invalidDate: true };
    }
    return {};
  }

  antivirusDateValidation(control: FormControl) {
    if (control.value) {
      this.assetComputer
        ?.get('antivirusExpirationDate')
        .setValidators(Validators.required);
      this.assetComputer
        ?.get('antivirusExpirationDate')
        .updateValueAndValidity();
      return {};
    }
    this.assetComputer?.get('antivirusExpirationDate').setValidators(null);
    this.assetComputer?.get('antivirusExpirationDate').updateValueAndValidity();
    return {};
  }
}
