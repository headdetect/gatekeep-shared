import {Person} from "./person";

export class Kiosk extends Person {

  public kioskId: string;

  public kioskCode: string; // Should just be populated on post only. //

  constructor(attributes: any = {}) {
    super(attributes);
  }
}
