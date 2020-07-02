import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

// eslint-disable-next-line @typescript-eslint/no-namespace
declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      matchImageSnapshot(name?: string): void;
    }
  }
}

addMatchImageSnapshotCommand();
