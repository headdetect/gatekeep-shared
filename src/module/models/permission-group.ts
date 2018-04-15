import {BaseModel} from "./base-model";

export class PermissionGroup extends BaseModel {

  public permissionGroupId: number;

  public name: string;

  public permissions: string[];

  constructor(attributes: any) {
    super(attributes);
  }
}
