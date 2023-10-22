import { Status } from "./Status";
import { Type } from "./Type";

 export interface AssetView{
    idAsset:number,
    type : Type,
    brand : string,
    serialNumber : string,
    purchaseDate : string,
    hasAntivirus : boolean,
    antivirusExpirationDate : Date,
    simNumber : string,
    simSerialNUmber : string,
    os:string,
    processor:string,
    storage:string,
    ram:string,
    additionalSoftware:string,
    note:string,
    companyId:number,
    companyName:string,
    employeeFirstName : string,
    employeeLastName:string,
    employeeIdEmployee:number,
    historyAssignmentDate:Date,
    historyIdHistory : number,
    historyAssetStatus:Status,
    historyEffectiveAssignmentDate:Date,
    historySignedDocument:string,
    historyUploadedSignedDocument:boolean
}