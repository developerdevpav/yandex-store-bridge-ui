export type SelectorKeyType = number | string;

export class Selector<T extends any> {

  private map: { [key: SelectorKeyType]: T } = {};

  constructor(private keyField: string = 'id') {
  }

  public change = (obj: T) => this.isSelected(obj) ? this.unselect(obj) : this.select(obj);

  public select(obj: T) {
    const key = this.getObjKey(obj);
    this.map[key] = obj;
  }

  public unselect(obj: T) {
    const key = this.getObjKey(obj);
    delete this.map[key];
  }

  public isSelected(obj: T): boolean {
    const key = this.getObjKey(obj);
    return !!this.map[key];
  }

  public isEmpty = () => Object.keys(this.map).length == 0;

  collect = () => new CollectorsImpl(this.map);

  private getObjKey = (obj: any): SelectorKeyType => obj[this.keyField];

  clear = () => Object.keys(this.map).forEach(it => delete this.map[it]);

}

interface Collectors<T> {

  keys(): string[];

  values(): T[];

  toMap(): Map<string | number, T>;

}

export class CollectorsImpl<T> implements Collectors<T> {

  constructor(private map: {[key: string | number]: T} = {}) {
  }


  public toMap(): Map<SelectorKeyType, T> {
    const map = new Map<SelectorKeyType, T>();

    Object.keys(this.map).map(key => map.set(key, this.map[key]));

    return map;
  }

  keys(): string[] {
    return Object.keys(this.map);
  }

  values(): T[] {
    return Object.keys(this.map).map(key => this.map[key]);;
  }

}
