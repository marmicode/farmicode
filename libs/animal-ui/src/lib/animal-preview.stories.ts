import {
  AnimalPreviewComponent,
  AnimalPreviewModule
} from '@farmazon/animal-ui';

export default {
  title: 'AnimalPreviewComponent'
};

export const main = () => ({
  moduleMetadata: {
    imports: [AnimalPreviewModule]
  },
  component: AnimalPreviewComponent
});
