export class Country {

id: number;
name: string;
isvalid: boolean;
  reason: string;

  constructor() {
    this.reason = 'Approval for this type of equipment is not required in this country';
    this.isvalid = true;
  }
}
