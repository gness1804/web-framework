import { Collection } from './../models/Collection';
import { CollectionViewI } from './../types/types';

// T = class User
// K = UserPropsI
export abstract class CollectionView<T, K> implements CollectionViewI<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  abstract renderItem(model: T, itemParent: Element): void;

  render(): void {
    // render a view for each model that we have fetched
    this.parent.innerHTML = '';

    const templateElement: HTMLTemplateElement = document.createElement(
      'template',
    );

    this.collection.models.forEach((model) => {
      const itemParent = document.createElement('div');
      this.renderItem(model, itemParent);
      templateElement.content.append(itemParent);
    });

    this.parent.append(templateElement.content);
  }
}
