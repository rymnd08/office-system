export interface Classes {
  id?: number | string;
  className: string;
  marketValue2003: number;
  marketValue2011: number;
}

export interface Land {
  id?: string | number;
  landName: string;
  classes: Classes[];
}
