import { Collection } from './../models/Collection';
import { UserPropsI } from './../types/types';
import { User } from './../models/User';
import { CollectionView } from './CollectionView';

export class UserList extends CollectionView<User, UserPropsI> {
  constructor(
    public parent: Element,
    public collection: Collection<User, UserPropsI>,
  ) {
    super(parent, collection);
  }

  private createTemplate(model: User): string {
    return `
      <input placeholder="${model.get('name')}" class="name-input" />
      <button class="set-name-btn">Set Name</button>
      <button class="set-age-btn">Set Random Age</button>
      <button class="save-btn">Save</button>
    `;
  }

  renderItem(model: User, itemParent: Element): void {
    // render a single view with a given item
    itemParent.innerHTML = '';

    const templateElement: HTMLTemplateElement = document.createElement(
      'template',
    );

    templateElement.innerHTML = this.createTemplate(model);

    itemParent.append(templateElement.content);
  }
}
