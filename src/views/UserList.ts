import { UserShow } from './UserShow';
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

  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}
