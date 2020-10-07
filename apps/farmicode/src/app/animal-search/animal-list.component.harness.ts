import { ComponentHarness } from '@angular/cdk/testing';

export class AnimalListHarness extends ComponentHarness {
  static hostSelector = 'fz-animal-list';

  private _getAnimalNameElList = this.locatorForAll('li');

  async getAnimalNames(): Promise<string[]> {
    const elList = await this._getAnimalNameElList();
    return Promise.all(elList.map(el => el.text()));
  }
}
