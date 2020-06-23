import { ComponentHarness } from '@angular/cdk/testing';

export class AnimalListHarness extends ComponentHarness {
  static hostSelector = 'fz-animal-list';

  private _getBuyButtonElList = this.locatorForAll(
    '[data-role=animal-buy-button]'
  );
  private _getAnimalNameElList = this.locatorForAll('[data-role=animal-name]');

  async buyFirstAnimal() {
    const buyButtonElList = await this._getBuyButtonElList();
    await buyButtonElList[0].click();
  }

  async getAnimalNames(): Promise<string[]> {
    const elList = await this._getAnimalNameElList();
    return Promise.all(elList.map(el => el.text()));
  }
}
