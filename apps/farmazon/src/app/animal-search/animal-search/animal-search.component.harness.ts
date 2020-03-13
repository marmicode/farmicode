import { ComponentHarness } from '@angular/cdk/testing';

export class AnimalSearchHarness extends ComponentHarness {
  static hostSelector = 'fz-animal-search';

  private _getKeywordsInput = this.locatorFor('input');
  private _getSubmitButton = this.locatorFor('button[type="submit"]');

  async search(keywords: string) {
    const keywordsInput = await this._getKeywordsInput();
    await keywordsInput.sendKeys(keywords);
    await (await this._getSubmitButton()).click();
  }
}
