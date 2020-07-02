import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

declare namespace Cypress {
  interface Chainable<Subject> {
    matchImageSnapshot(name?: string): void;
  }
}

addMatchImageSnapshotCommand();
