import { Status } from './Status';
import { Type } from './Type';

export class AssetViewHistorySearch {
  constructor(
    public type?: Type,
    public search?: string,
    public status?: Status[]
  ) {}
}
