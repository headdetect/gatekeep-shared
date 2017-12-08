export class BaseModel {

  /**
   * Requires that each model can be created from a specified generic object of attributes
   *
   * @param attributes
   * @returns {BaseModel}
   */
  constructor(attributes : any) {
    Object.assign(this, attributes);
  }

}
