export interface Product {
  name: string;
  value: number;
  quantity: number;
  description: string;
  properties: Properties[];
  category: string;
  dateCreated: Date;
  dateUpdated: Date;
  deleted: boolean;
}

export interface Properties {
  name: string;
  description: string;
}
