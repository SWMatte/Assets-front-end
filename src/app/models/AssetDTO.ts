import { Asset } from './Asset';
import { Status } from './Status';

export class AssetDTO {
  constructor(
    public asset?: Asset,
    public status?: Status,
     public createHistory?: boolean,
    public idCompany?: number,
    public idEmployee?: number
  ) {}

}

