import { extendObservable } from 'mobx';

class ListStore {
  constructor() {
    extendObservable(this, {items: []});
  }
}

export default ListStore;