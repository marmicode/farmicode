import {
  AnimalPreviewComponent,
  AnimalPreviewModule
} from './animal-preview.component';

export default {
  title: 'AnimalPreviewComponent'
};

export const main = () => ({
  moduleMetadata: {
    imports: [AnimalPreviewModule]
  },
  component: AnimalPreviewComponent
});
