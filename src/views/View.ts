import { Model } from './../models/Model';
import { EventObjI } from './../types/types';
import { ViewI } from '../types/types';

export abstract class View<T extends Model<U>, U> implements ViewI<T> {
  constructor(public parent: HTMLElement, public model: T) {}

  abstract createTemplate(): string;
  abstract returnEventsMap(): EventObjI;

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  bindEvents(fragment: DocumentFragment): void {
    const events = this.returnEventsMap();
    for (const eventsKey in events) {
      if ({}.hasOwnProperty.call(events, eventsKey)) {
        const [action, element] = eventsKey.split(':');
        fragment.querySelectorAll(element).forEach((elem) => {
          elem.addEventListener(action, events[eventsKey]);
        });
      }
    }
  }

  render(): void {
    this.parent.innerHTML = '';

    const templateElement: HTMLTemplateElement = document.createElement(
      'template',
    );
    templateElement.innerHTML = this.createTemplate();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
