 
export class Asset {
    
 
    constructor(
        public type?: Type,
        public brand?: string,
        public serialNumber?: string,
        public purchaseDate?: Date,
        public additionalSoftware?: string,
        public additionalHardware?: string,
        public hwFeatures?: string,
        public hasAntivirus?: boolean,
        public antivirusExpirationDate?: Date,
    ) {}
}



export enum Type {
    PC = 'PC',
    TELEFONO = 'TELEFONO'
}


 