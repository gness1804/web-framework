import { Model } from './../models/Model';
import { EventObjI, RegionsI, RegionsMapI } from './../types/types';
import { ViewI } from '../types/types';

export abstract class View<T extends Model<U>, U> implements ViewI<T> {
  regions: RegionsI = {};
  constructor(public parent: Element, public model: T) {}

  abstract createTemplate(): string;

  returnRegionsMap(): RegionsMapI;
  returnRegionsMap(): RegionsMapI {
    return {};
  }

  returnEventsMap(): EventObjI;
  returnEventsMap(): EventObjI {
    return {};
  }

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

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.returnRegionsMap();
    for (const regionName in regionsMap) {
      if (Object.prototype.hasOwnProperty.call(regionsMap, regionName)) {
        const parentElementSelector = regionsMap[regionName];
        const regionElement = fragment.querySelector(parentElementSelector);

        if (regionElement) {
          this.regions[regionName] = regionElement;
        }
      }
    }
  }

  onRender(): void {}

  render(): void {
    this.parent.innerHTML = '';

    const templateElement: HTMLTemplateElement = document.createElement(
      'template',
    );
    templateElement.innerHTML = this.createTemplate();
    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);

    this.onRender();

    this.parent.append(templateElement.content);
  }
}
